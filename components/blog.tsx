'use client';

import { Button } from '@/components/ui/button';
import { LINKS } from '@/constants/links';
import { STRINGS } from '@/constants/strings';
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  contentSnippet: string;
  pubDate: string;
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/medium-articles')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data: Article[]) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Blog fetch error:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-normal">{STRINGS.BLOG_LABEL}</h2>

        <div className="space-y-8" aria-busy={loading} aria-live="polite">
          {loading ? (
            <p>{STRINGS.LOADING}</p>
          ) : error ? (
            <p className="text-destructive text-sm">{STRINGS.LOAD_ERROR}</p>
          ) : articles.length === 0 ? (
            <p>{STRINGS.NO_ARTICLES}</p>
          ) : (
            articles.slice(0, 3).map((post, index) => (
              <article key={index} className="space-y-2" aria-labelledby={`blog-title-${index}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3
                    id={`blog-title-${index}`}
                    className="hover:text-foreground/80 min-w-0 flex-1 text-lg font-normal transition-colors"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read full article: ${post.title}`}
                      className="focus:outline focus:outline-offset-2"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <time
                    className="text-muted-foreground flex-shrink-0 text-sm sm:mt-0.5"
                    dateTime={new Date(post.pubDate).toISOString()}
                  >
                    {post.pubDate}
                  </time>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.contentSnippet}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read more about: ${post.title}`}
                >
                  <Button
                    variant="link"
                    className="hover:text-foreground/80 h-auto p-0 text-sm font-normal"
                  >
                    {STRINGS.READ_MORE}
                  </Button>
                </a>
              </article>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href={LINKS.MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all posts on Medium"
          >
            <Button variant="outline" size="sm" className="bg-transparent font-normal">
              {STRINGS.LOAD_MORE_POSTS}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
