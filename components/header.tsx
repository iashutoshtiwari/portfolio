'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import {
  IconUser,
  IconBriefcase,
  IconArticle,
  IconMail,
  IconSun,
  IconMoon,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';
import { STRINGS } from '@/constants/strings';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-background border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xs">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            aria-label="Go to About section"
            aria-current={activeSection === 'about' ? 'page' : undefined}
            className="hover:text-foreground/80 p-0 text-sm font-normal hover:bg-transparent"
          >
            <IconUser size={16} className="mr-2" />
            {STRINGS.ABOUT_LABEL}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('experience')}
            aria-label="Go to Experience section"
            aria-current={activeSection === 'experience' ? 'page' : undefined}
            className="hover:text-foreground/80 p-0 text-sm font-normal hover:bg-transparent"
          >
            <IconBriefcase size={16} className="mr-2" />
            {STRINGS.EXPERIENCE_LABEL}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('blog')}
            aria-label="Go to Blog section"
            aria-current={activeSection === 'blog' ? 'page' : undefined}
            className="hover:text-foreground/80 p-0 text-sm font-normal hover:bg-transparent"
          >
            <IconArticle size={16} className="mr-2" />
            {STRINGS.BLOG_LABEL}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('contact')}
            aria-label="Go to Contact section"
            aria-current={activeSection === 'contact' ? 'page' : undefined}
            className="hover:text-foreground/80 p-0 text-sm font-normal hover:bg-transparent"
          >
            <IconMail size={16} className="mr-2" />
            {STRINGS.CONTACT_LABEL}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2"
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </Button>
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={theme === 'dark'}
          className="p-2"
        >
          {theme === 'dark' ? <IconSun size={16} /> : <IconMoon size={16} />}
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="bg-background/95 border-border border-b backdrop-blur-xs md:hidden"
          id="mobile-navigation"
        >
          <div className="container mx-auto space-y-4 px-4 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('about')}
              aria-label="Go to About section"
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className="hover:bg-muted/50 w-full justify-start p-3 text-sm font-normal"
            >
              <IconUser size={16} className="mr-3" />
              {STRINGS.ABOUT_LABEL}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('experience')}
              aria-label="Go to Experience section"
              aria-current={activeSection === 'experience' ? 'page' : undefined}
              className="hover:bg-muted/50 w-full justify-start p-3 text-sm font-normal"
            >
              <IconBriefcase size={16} className="mr-3" />
              {STRINGS.EXPERIENCE_LABEL}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('blog')}
              aria-label="Go to Blog section"
              aria-current={activeSection === 'blog' ? 'page' : undefined}
              className="hover:bg-muted/50 w-full justify-start p-3 text-sm font-normal"
            >
              <IconArticle size={16} className="mr-3" />
              {STRINGS.BLOG_LABEL}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('contact')}
              aria-label="Go to Contact section"
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className="hover:bg-muted/50 w-full justify-start p-3 text-sm font-normal"
            >
              <IconMail size={16} className="mr-3" />
              {STRINGS.CONTACT_LABEL}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
