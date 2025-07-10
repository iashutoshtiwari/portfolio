'use client';
import { Button } from '@/components/ui/button';
import { STRINGS } from '@/constants/strings';

const ResumeButton = () => {
  // Function to handle resume download click
  const handleResumeClick = () => {
    window.gtag?.('event', 'resume_downloaded', {
      event_category: 'engagement',
      event_label: 'Resume Button',
    });
  };

  return (
    <div className="mt-12">
      <a
        href="/assets/Ashutosh-Tiwari-Resume.pdf"
        download
        aria-label="Download Ashutosh Tiwari's Resume as PDF"
      >
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer bg-transparent font-normal"
          aria-label="Download Resume"
          onClick={handleResumeClick}
        >
          {STRINGS.RESUME_DOWNLOAD}
        </Button>
      </a>
    </div>
  );
};

export default ResumeButton;
