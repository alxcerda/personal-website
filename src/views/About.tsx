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
              During my mathematics degree, I worked with MATLAB and I found
              myself hooked. I knew coding was for me. It's what lead me to
              become a developer - I'm currently working as a full-stack
              software engineer. My goal? To use my passion & skills to develop
              functional, minimal and elegant websites!
            </div>
          </div>
          <div className="flex flex-col flex-wrap pt-10 xs:pt-3 pb-8 grid fade-in-translate-vvslow-top">
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS / SCSS</div>
            <div>React</div>
            <div>Vue.js</div>
            <div>GraphQL</div>
            <div>Express</div>
            <div>Jest</div>
            <div>Cypress</div>
            <div>Firebase</div>
            <div>Heroku</div>
            <div>AWS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
