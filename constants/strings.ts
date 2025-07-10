export const STRINGS = {
  /* About Section */
  ABOUT_LABEL: 'About',
  NAME: 'Ashutosh Tiwari',
  BIO_PRIMARY: `I’m a software developer driven by curiosity and a love for well-crafted digital
                  experiences. My journey began with a fascination for how great interfaces work,
                  which naturally led me into the world of frontend engineering. I’ve since built
                  high-performance, accessible UIs using modern tools like React, Next.js, and
                  TypeScript — and as my skills grew, I expanded into fullstack development with
                  Node.js and AI-driven workflows that solve practical, real-world problems.`,
  BIO_SECONDARY: `At heart, I’m an indie developer who thrives on building thoughtful side projects. I
                care deeply about user experience, clean design, and maintainable architecture.
                Whether I’m shipping a solo project or collaborating on a team, I aim to create
                software that feels as good to use as it does to build — blending usability,
                performance, and clean code into every feature.`,
  BIO_TERTIARY: `Outside of tech, I stay grounded through fitness and storytelling. I hit the gym
                almost daily, geek out on training science, and unwind with deep, narrative-driven
                games. These interests keep me sharp, focused, and creatively engaged — and I carry
                that same energy into every line of code I write.`,
  KEY_POINTS: [
    '3.5+ years of experience',
    'Full-stack development',
    'React, Node.js, TypeScript',
    'Available for work',
    'Clean, performant web apps',
  ],

  /* Experience Section */
  EXPERIENCE_LABEL: 'Experience',

  EXPERIENCES: [
    {
      company: 'Mindstix Software Labs',
      role: 'Member of Technical Staff',
      duration: 'Aug 2021 - Mar 2024',
      description:
        'Rebuilt Amway Taiwan’s Cart and Checkout UIs using React, Next.js, and TypeScript, boosting mobile performance and engagement. Led Staples’ checkout redesign and built EasyRewards, a loyalty redemption system used by thousands. Integrated advanced payment flows and optimized Node.js BFF endpoints to sub-100ms latency. Also mentored junior devs and collaborated across Agile teams.',
    },
    {
      company: 'Cognizant',
      role: 'Programmer Analyst',
      duration: 'Aug 2020 - Mar 2021',
      description:
        'Contributed to Aetna’s member portal by building and testing React components and migrating legacy JavaScript to modern, reusable React code—improving load times by 1+ second. Integrated REST APIs for features like claims and digital ID cards. Actively participated in UI/UX reviews and enhanced accessibility per WCAG guidelines.',
    },
    {
      company: 'Cognizant',
      role: 'Intern',
      duration: 'Jan 2020 - Aug 2020',
      description:
        'Completed frontend training in React, Redux, Webpack, and SASS, applying skills in a 4-member Agile capstone project. Built a responsive e-commerce UI with structured components, state management, and API integration. Collaborated using Git and Jira, following modern version control workflows.',
    },
  ],
  SKILLS_LABEL: 'Skills',
  SKILLS: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'SASS',
    'Tailwind',
    'Redux',
    'Zustand',
    'Java',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'REST APIs',
    'Docker',
    'Kubernetes',
    'AWS',
  ],
  EDUCATION_LABEL: 'Education',
  UNIVERSITY: 'Chandigarh University',
  DEGREE: "Bachelor's of Engineering in Computer Science",
  EDUCATION_DURATION: '2016 - 2020',
  RESUME_DOWNLOAD: 'Download Resume',

  /* Blog Section */
  BLOG_LABEL: 'Blog',
  LOADING: 'Loading articles...',
  LOAD_ERROR: 'Failed to load articles. Try again later.',
  NO_ARTICLES: 'No articles found.',
  READ_MORE: 'Read more →',
  LOAD_MORE_POSTS: 'Load more posts',

  /* Contact Section */
  CONTACT_LABEL: 'Contact',
  LABEL_NAME: 'Name',
  LABEL_EMAIL: 'Email',
  LABEL_MSG: 'Message',
  FORM_SUCCESS: `Thanks for your message! I'll get back to you within 24 hours.`,
  FORM_ERROR: 'Failed to send message. Please try again.',
  LABEL_SUBMIT: 'Submit',
  REPLY_SUBTITLE: `I'll reply within 24 hours.`,
  GITHUB: 'GitHub',
  LINKEDIN: 'LinkedIn',
  X: 'Twitter',

  /* Footer Section */
  FOOTER_COPYRIGHT: `© ${new Date().getFullYear()} Ashutosh Tiwari`,
  FOOTER_SOURCE: '(Source)',

  /* EMAIL API */

  NOTIFICATION_SUBJECT: (name: string, email: string) =>
    `New Contact Form Submission from ${name} (${email})`,

  NOTIFICATION_HTML: (name: string, email: string, message: string) => `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>`,

  ACKNOWLEDGMENT_SUBJECT: 'Thanks for reaching out!',

  ACKNOWLEDGMENT_HTML: (
    name: string,
  ) => `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; line-height: 1.6; color: #333; padding: 20px;">
          <p>Hey ${name},</p>
          <p>
            Thanks for reaching out! I’ve received your message and I'll get back to you soon.
          </p>
          <p style="margin-top: 32px;">
            Regards,<br/>
            Ashutosh
          </p>
          <hr style="margin-top: 40px; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 13px; color: #999;">
            If you didn’t submit a message at <a href="https://ashutoshtiwari.dev" style="color: #4f46e5;">ashutoshtiwari.dev</a>, you can ignore this email.
          </p>
        </div>`,
};
