import React from "react";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="fade-in-slow w-full">
      <Title title="About" description="Get to know me" />
      <div className="w-full flex flex-col items-center fade-in-translate-slow-top">
        <div className="pt-10 px-5">
          <div className="text-2xl">Hey, I'm Alex.</div>
          <div className="text-md pt-3 xs:text-justify">
            Currently a full-stack software engineer that develops minimal and
            elegant websites.
          </div>
          <div className="flex flex-col flex-wrap pt-10 xs:pt-3 pb-8 grid">
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS / SCSS</div>
            <div>React</div>
            <div>Vue.js</div>
            <div>GraphQL</div>
            <div>Express</div>
            <div>Jest</div>
            <div>Cypress</div>
          </div>
        </div>
      </div>
    </div>
  );
}
