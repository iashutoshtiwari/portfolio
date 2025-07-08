import type { NextRequest } from 'next/server';
import Parser from 'rss-parser';
import * as cheerio from 'cheerio';
import { LINKS } from '@/constants/links';

const parser = new Parser();

export async function GET(_req: NextRequest) {
  try {
    const feed = await parser.parseURL(LINKS.MEDIUM_RSS);

    const articles = feed.items.map((item) => {
      const rawHtml = item['content:encoded'] || item.content || '';
      const $ = cheerio.load(rawHtml);
      const cleanedText = $.text().replace(/\s+/g, ' ').trim();

      // Get first sentence
      const sentenceMatch = cleanedText.match(/^.*?[.?!]/);
      const firstSentence = sentenceMatch ? sentenceMatch[0].trim() : '';
      const snippet = firstSentence
        ? `${firstSentence}...`
        : cleanedText.slice(0, 160).trim() + '...';

      // Format pubDate as "Apr 16, 2024"
      let formattedDate = null;
      if (item.pubDate) {
        const parsedDate = new Date(item.pubDate);
        formattedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(parsedDate);
      }

      return {
        title: item.title ?? 'Untitled',
        link: item.link ?? '#',
        pubDate: formattedDate,
        contentSnippet: snippet,
      };
    });

    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('[RSS Error]', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch or parse feed.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
