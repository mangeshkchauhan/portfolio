import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-24 md:py-32">
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
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
