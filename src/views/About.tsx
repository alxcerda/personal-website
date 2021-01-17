import React from "react";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="w-full">
      <Title title="About" description="Get to know me" />
      <div className="w-full flex flex-col items-center">
        <div className="pt-10 px-5 fade-in-translate-vslow-top">
          <div className="about__description">
            <div className="text-2xl">Hey, I'm Alex.</div>
            <div className="text-md pt-3 text-justify">
              Currently working as a full-stack software engineer. My goal? To
              use my passion & skills to develop functional, minimal and elegant
              websites!
            </div>
          </div>
          <div className="grid flex-wrap pt-3 xs:pt-3 pb-10 fade-in-translate-vslow-top">
            <div>Javascript</div>
            <div> Ruby </div>
            <div>HTML</div>
            <div>CSS / SCSS</div>
            <div>Vue.js</div>
            <div>React</div>
            <div>GraphQL</div>
            <div>Express</div>
            <div> Ruby on Rails</div>
            <div> RSpec </div>
            <div>Jest</div>
            <div>Cypress</div>
            <div>Firebase</div>
            <div>Heroku</div>
            <div>AWS</div>
            <div> Sentry </div>
            <div> Segment </div>
            <div> Google Analytics </div>
          </div>
        </div>
      </div>
    </div>
  );
}
