import React, { Component } from "react";

import "./App.css";

class EducationCard extends Component {
  render() {
    const { image, school, degree, dates, link, bg } = this.props;
    return (
      <a href={link} target="_blank">
        <div className=" transition duration-500 ease-in-out bg-white transform hover:-translate-y-1 hover:scale-110  rounded overflow-hidden shadow-lg  border-gray-700 border-opacity-75 my-10 mx-5 px-12 py-10">
          <div className=" bg-local flex flex-row">
            <img className="h-auto max-w-sm" src={image} />
            <div>
              <h3 className="font-bold text-2xl"> {school} </h3>
              <h2 className="text-gray-700 text-xl text-base"> {degree} </h2>
              <p className="text-gray-700 text-base"> {dates} </p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default EducationCard;
