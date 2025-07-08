'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandX } from '@tabler/icons-react';
import { STRINGS } from '@/constants/strings';
import { LINKS } from '@/constants/links';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field for spam prevention
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if honeypot field is filled (spam bot)
    if (formData.honeypot) {
      console.log('Spam detected');
      return;
    }

    console.log('Form submitted:', formData);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res?.ok) {
      // Show success message
      alert(STRINGS.FORM_SUCCESS);

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      });
    } else {
      alert(STRINGS.FORM_ERROR);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-muted/20 px-4 py-20">
      <div className="container mx-auto max-w-2xl">
        <h2 className="mb-12 text-2xl font-normal">{STRINGS.CONTACT_LABEL}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-normal">
              {STRINGS.LABEL_NAME}
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="font-mono"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-normal">
              {STRINGS.LABEL_EMAIL}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="font-mono"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-normal">
              {STRINGS.LABEL_MSG}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="resize-none font-mono"
              required
            />
          </div>
          {/* Honeypot field - hidden from users but bots will fill it */}
          <div className="hidden">
            <label htmlFor="honeypot">Leave this field empty</label>
            <Input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <Button type="submit" variant="outline" size="sm" className="bg-transparent font-normal">
            {STRINGS.LABEL_SUBMIT}
          </Button>
        </form>

        <p className="text-muted-foreground mt-6 text-xs">{STRINGS.REPLY_SUBTITLE}</p>

        <div className="border-border mt-12 border-t pt-8">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={LINKS.EMAIL_LINK}
              target="_blank"
              aria-label="Ashutosh Tiwari's Email"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
            >
              <IconMail size={16} className="mr-2" />
              {LINKS.EMAIL}
            </a>
            <a
              href={LINKS.GITHUB}
              target="_blank"
              aria-label="Ashutosh Tiwari's GitHub"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
            >
              <IconBrandGithub size={16} className="mr-2" />
              {STRINGS.GITHUB}
            </a>
            <a
              href={LINKS.LINKEDIN}
              target="_blank"
              aria-label="Ashutosh Tiwari's LinkedIn"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
            >
              <IconBrandLinkedin size={16} className="mr-2" />
              {STRINGS.LINKEDIN}
            </a>
            <a
              href={LINKS.X}
              target="_blank"
              aria-label="Ashutosh Tiwari's Twitter"
              className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
            >
              <IconBrandX size={16} className="mr-2" />
              {STRINGS.X}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
