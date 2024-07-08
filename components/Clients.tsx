import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div id="clients" className="py-20">
      <h1 className="heading mb-10">
        Kind words from <span className="text-purple">peers and clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <h1 className="heading mt-10" style={{ fontSize: "30px" }}>
          Contributed <span className="text-purple">for</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-4">
          {companies.map(({ id, name, img, nameImg }) => {
            return (
              <div
                key={id}
                className="flex md:max-w-60 max-w-32 gap-2 items-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-full rounded-full"
                />
                <img
                  src={nameImg}
                  alt={name}
                  className="md:w-24 w-20 h-full h-6 object-cover"
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
