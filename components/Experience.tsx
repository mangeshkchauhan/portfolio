import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div id="experience" className="py-20">
      <h1 className="text-display-md font-serif font-bold mb-10 text-center text-text-primary">
        My <span className="text-brand-primary">work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgba(0,0,0,0.9)",
              backgroundColor: "rgba(0,0,0,0.9)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="text-white border-white/10 w-full h-full min-h-[280px]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-6 lg:p-8 gap-4 h-full">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-24 md:w-20 w-16 mx-auto lg:mx-0 flex-shrink-0"
              />
              <div className="lg:ms-4 text-center lg:text-left flex-1">
                <h1 className="text-lg md:text-xl lg:text-xl text-white-200 font-bold leading-tight">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-medium text-sm md:text-base leading-relaxed">
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
