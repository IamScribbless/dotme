import React from "react";
import EducationCard from "../components/EducationCard";

const Education = ({ image, school, degree, dates, bg }) => {
  return (
    <div className="container justify-center w-screen flex flex-col mx-auto py-12  ">
      <div className=" w-full grid rows-2 grid-cols-1">
        <EducationCard
          image="/images/uh.png"
          school="University of Houston - Clear Lake"
          dates="2013-2014"
          degree="MA Behavioral Science, Applied Cognitive Psychology"
          link="https://www.uhcl.edu"
          bg="./images/uhphoto.jpg"
        />
        <EducationCard
          image="./images/sfa.png"
          school="Stephen F. Austin State University"
          dates="2007-2011"
          degree="BA Psychology, Minor in Business"
          link="http://sfasu.edu/"
        />
      </div>
    </div>
  );
};

export default Education;
