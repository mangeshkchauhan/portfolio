import { workExperience } from '@/data';
import Image from 'next/image';
import { Button } from './ui/MovingBorder';

const Experience = () => {
  return (
    <div id="experience" className="py-24 md:py-32">
      <div className="text-center mb-16">
        <p className="text-caption text-brand-primary/90 mb-4 tracking-widest">
          Career
        </p>
        <h1 className="text-display-md font-season font-normal text-center text-text-primary">
          My <span className="text-brand-primary">work experience</span>
        </h1>
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgba(0,0,0,0.85)',
              backgroundColor: 'rgba(0,0,0,0.85)',
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="text-white border-white/[0.08] hover:border-white/15 w-full h-full min-h-[280px] transition-colors duration-300"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-6 lg:p-8 gap-4 h-full">
              <div className="relative lg:w-24 md:w-20 w-16 h-16 md:h-20 lg:h-24 mx-auto lg:mx-0 flex-shrink-0">
                <Image
                  src={card.thumbnail}
                  alt={`${card.title} - company or role logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                />
              </div>
              <div className="lg:ms-4 text-center lg:text-left flex-1">
                <h1 className="text-lg md:text-xl font-season font-semibold text-white leading-tight">
                  {card.title}
                </h1>
                <p className="text-white/75 mt-3 font-sans text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
