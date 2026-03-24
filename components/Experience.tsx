'use client';

import { workExperience } from '@/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/MovingBorder';

const borderDuration = (id: number) => 10000 + ((id * 1379) % 8000);

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <p className="text-caption text-brand-primary/90 mb-4 tracking-widest">
          Career
        </p>
        <h2 className="text-display-md font-display font-normal text-center text-text-primary">
          My <span className="text-brand-primary">work experience</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-body-lg font-sans leading-relaxed mt-6">
          Frontend and mobile roles focused on performance, design systems, and
          shipping reliable user experiences at scale.
        </p>
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={borderDuration(card.id)}
            borderRadius="1.75rem"
            style={{
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="border-border hover:border-foreground/20 dark:border-white/[0.08] dark:hover:border-white/15 w-full h-full min-h-[280px] transition-colors duration-300"
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
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground dark:text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground dark:text-white/75 mt-3 font-sans text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
