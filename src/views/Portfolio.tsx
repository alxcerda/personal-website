import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import Title from "../components/Title";
import data from "../lib/portfolioData";

export default function Portfolio() {
  return (
    <div className="fade-in-slow w-full">
      <Title
        title="Portfolio"
        description="Examples of some projects I have recently worked on"
      />
      <div className="px-14 pt-10 xs:px-4 md:pt-3 flex flex-wrap justify-center">
        {data.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            url={item.url}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
