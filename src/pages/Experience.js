import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const Experience = ({ image, company, role, dates, link }) => {
  return (
    <div className="container justify-center w-screen flex flex-col mx-auto py-12  ">
      <div className=" w-full grid rows-6 grid-cols-1">
        <ExperienceCard
          image="/images/amazonl.png"
          company="Amazon Inc."
          dates="2020-present"
          role="Senior User Experience Researcher"
          link="https://www.amazon.science/"
        />
        <ExperienceCard
          image="./images/Fblogo.png"
          company="Facebook Inc."
          dates="2017-2019"
          role="Lead Experience Researcher"
          link="https://research.fb.com/category/human-computer-interaction-and-ux/"
        />

        <ExperienceCard
          image="/images/startux.png"
          company="Start UX LLC"
          dates="2016-2017"
          role="Founder/Principal Consultant"
        />
        <ExperienceCard
          image="/images/hm.png"
          company="Houston Methodist Hospital System"
          dates="2014-2017"
          role="Experience Researcher"
          link="https://www.houstonmethodist.org/"
        />
        <ExperienceCard
          image="/images/hp.png"
          company="Hewlett Packard."
          dates="2013-2015"
          role=" Human Factors Researcher"
          link="https://www.hp.com/"
        />
      </div>
    </div>
  );
};

export default Experience;
