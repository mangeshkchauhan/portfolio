import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div id="clients" className="py-10 md:py-20">
      <h1 className="heading mb-6 md:mb-10">
        Kind words from <span className="text-purple">peers and clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <h1 className="heading mt-6 md:mt-10 text-2xl md:text-3xl lg:text-4xl">
          Contributed <span className="text-purple">for</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-6 px-4">
          {companies.map(({ id, name, img, nameImg }) => {
            return (
              <div
                key={id}
                className="flex max-w-24 sm:max-w-32 md:max-w-48 lg:max-w-60 gap-1 sm:gap-2 items-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                />
                <img
                  src={nameImg}
                  alt={name}
                  className="w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 object-contain flex-shrink-0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
