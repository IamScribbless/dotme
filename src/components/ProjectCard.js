import React from "react";
import "./App.css";

const ProjectCard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="transition duration-500 ease-in-out bg-white  hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-100 rounded overflow-hidden shadow-lg border-4 border-blue-800 border-opacity-75 my-10 mx-5 px-12 py-10">
      <div className="flex flex-col ">
        <img className="justify-center" src={image} />
        <div className="py-6">
          <h3 className="font-bold text-xl mb-2"> {title} </h3>
          <p className="text-gray-700 text-base"> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
