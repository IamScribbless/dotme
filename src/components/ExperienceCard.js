import React, { Component } from "react";

import "./App.css";

class ExperienceCard extends Component {
  render() {
    const { company, role, dates, image, link } = this.props;
    return (
      <a href={link} target="_blank">
        <div className="transition duration-500 ease-in-out bg-white transform hover:-translate-y-1 hover:scale-110  rounded overflow-hidden shadow-lg  border-gray-700 border-opacity-75 my-10 mx-5 px-12 py-10">
          <div className="flex flex-row">
            <img className="h-16 mx-12 w-auto" src={image} />

            <div>
              <h3 className="font-bold text-2xl"> {company} </h3>
              <h2 className="text-gray-700 text-xl text-base"> {role} </h2>
              <p className="text-gray-700 text-base"> {dates} </p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default ExperienceCard;
