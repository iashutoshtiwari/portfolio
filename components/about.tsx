import { STRINGS } from '@/constants/strings';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Bio Content with Photo */}
          <div className="space-y-6">
            <h1 className="text-center text-3xl font-normal md:text-left md:text-4xl">
              {STRINGS.NAME}
            </h1>

            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Bio Text */}
              <div className="text-muted-foreground order-2 flex-1 space-y-4 text-left leading-relaxed md:order-1">
                <p>{STRINGS.BIO_PRIMARY}</p>
              </div>

              {/* Photo */}
              <div className="order-1 mb-6 flex justify-center md:order-2 md:mb-0 md:justify-end">
                <div className="bg-muted/50 border-border group h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border md:h-48 md:w-48">
                  <Image
                    src="/profile.jpg"
                    alt="Ashutosh Tiwari"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
                  />
                </div>
              </div>
            </div>

            {/* Additional Bio Text Below */}
            <div className="text-muted-foreground text-left leading-relaxed">
              <p>{STRINGS.BIO_SECONDARY}</p>
            </div>
            <div className="text-muted-foreground text-left leading-relaxed">
              <p>{STRINGS.BIO_TERTIARY}</p>
            </div>
          </div>

          {/* Key Points */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STRINGS.KEY_POINTS.map((point, index) => (
              <div key={index} className="flex items-center justify-start">
                <span className="mr-3 text-sm">→</span>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
