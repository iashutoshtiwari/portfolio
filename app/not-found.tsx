'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center px-4 font-mono">
      <div className="max-w-md space-y-8 text-center">
        {/* 404 Error */}
        <div className="space-y-4">
          <h1 className="text-muted-foreground text-6xl font-normal md:text-8xl">404</h1>
          <h2 className="text-2xl font-normal md:text-3xl">Page Not Found</h2>
        </div>

        {/* Error Message */}
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>{`The page you're looking for doesn't exist or has been moved.`}</p>
          <p className="text-sm">
            It might have been deleted, renamed, or you entered the wrong URL.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline" size="sm" className="bg-transparent font-normal">
            <Link href="/" className="flex items-center">
              <IconHome size={16} className="mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="ghost"
            size="sm"
            className="hover:text-foreground/80 font-normal hover:bg-transparent"
          >
            <IconArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
