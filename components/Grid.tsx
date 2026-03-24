import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto px-4">
        <p className="text-caption text-brand-primary/90 mb-4 tracking-widest">
          About
        </p>
        <h2 className="text-display-md font-display font-normal text-text-primary mb-6">
          How I <span className="text-brand-primary">work</span> with you
        </h2>
        <p className="text-text-secondary text-body-lg font-sans leading-relaxed">
          Collaboration, communication across time zones, and a stack I keep
          sharp—plus what I&apos;m building next and how to reach out.
        </p>
      </div>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
            contentOnDark,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
              title={title}
              description={description}
              contentOnDark={contentOnDark}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
