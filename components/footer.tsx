import { LINKS } from '@/constants/links';
import { STRINGS } from '@/constants/strings';

export default function Footer() {
  return (
    <footer className="border-border border-t px-4 py-8" aria-label="Footer">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-muted-foreground text-xs"
            tabIndex={0}
            aria-label={STRINGS.FOOTER_COPYRIGHT}
          >
            {STRINGS.FOOTER_COPYRIGHT}
          </p>
          <div className="flex items-center">
            <a
              href={LINKS.SOURCE_CODE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              aria-label="View source code on GitHub"
            >
              {STRINGS.FOOTER_SOURCE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
