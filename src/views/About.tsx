import React from "react";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="w-full">
      <Title title="About" description="Get to know me" />
      <div className="w-full flex flex-col items-center">
        <div className="pt-10 px-5 fade-in-translate-vslow-top">
          <div className="about__description">
            <div className="text-3xl">Hey, I'm Alex.</div>
            <div className="text-md pt-3 text-justify">
              Currently working as a full-stack software engineer. My goal? To
              use my passion & skills to develop functional, minimal and elegant
              websites!
            </div>
          </div>
        </div>
        <div className="fade-in-translate-vslow-top flex justify-between flex-wrap pt-8 xs:pt-3 pb-12 about__description">
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl"> Languages </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1">Javascript</div>
              <div className="py-1"> Ruby </div>
              <div className="py-1">HTML</div>
              <div className="py-1">CSS (SCSS)</div>
            </div>
          </div>
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl "> Frameworks </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1">Vue.js</div>
              <div className="py-1">React</div>
              <div className="py-1">GraphQL</div>
              <div className="py-1">Express</div>
              <div className="py-1"> Ruby on Rails</div>
            </div>
          </div>
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl"> Deployment </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1">AWS</div>
              <div className="py-1">Firebase</div>
              <div className="py-1">Heroku</div>
            </div>
          </div>
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl"> Testing </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1">Cypress</div>
              <div className="py-1">Jest</div>
              <div className="py-1"> RSpec </div>
            </div>
          </div>
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl"> Emailing </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1"> MJML </div>
              <div className="py-1"> MailChimp </div>
            </div>
          </div>
          <div style={{ width: "133px" }}>
            <h1 className="pt-5 pb-1 text-xl"> Reporting </h1>
            <div className="pb-2 text-gray-400">
              <div className="py-1"> Google Analytics </div>
              <div className="py-1"> Sentry </div>
              <div className="py-1"> Amplitude </div>
              <div className="py-1"> Segment </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
