import { Button } from '@/components/ui/button';

import { STRINGS } from '@/constants/strings';

export default function Experience() {
  return (
    <section id="experience" className="bg-muted/20 py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-normal">Experience</h2>

        <div className="space-y-12">
          {STRINGS.EXPERIENCES.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-normal">{exp.company}</h3>
                <span className="text-muted-foreground text-sm">{exp.duration}</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">{exp.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          <h3 className="text-lg font-normal">{STRINGS.SKILLS_LABEL}</h3>
          <div className="flex flex-wrap gap-2">
            {STRINGS.SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-muted/50 text-muted-foreground rounded px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <h3 className="text-lg font-normal">{STRINGS.EDUCATION_LABEL}</h3>
          <div className="space-y-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-base font-normal">{STRINGS.UNIVERSITY}</h4>
              <span className="text-muted-foreground text-sm">{STRINGS.EDUCATION_DURATION}</span>
            </div>
            <p className="text-muted-foreground text-sm">{STRINGS.DEGREE}</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/assets/Ashutosh-Tiwari-Resume.pdf" download>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer bg-transparent font-normal"
            >
              {STRINGS.RESUME_DOWNLOAD}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
