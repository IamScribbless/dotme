import React from "react";
import NavList from "./NavList";
import SocialMedia from "./SocialMedia";
import "./App.css";
import ProfilePic from "./ProfilePic";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" flex-shrink-0 h-screen max-w-sm overflow-hidden shadow-lg bg-white hover:bg-gray-100 w-1/4 ">
      <div className=" py-12">
        <ProfilePic />
        <div className="flex flex-col justify-center text-3xl py-4">
          <h1 className="text-center">Stephan Kotin</h1>
          <h1 className="flex justify-center text-center text-xl object-top">
            UX Research and Design
          </h1>
        </div>
        <SocialMedia />
        <div className="py-12">
          <p className=" font-sans font-family: Roboto py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
            <Link to="/">Home</Link>
          </p>
          <p className=" py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
            <Link to="/Projects">Projects</Link>
          </p>
          <p className="py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
            <Link to="/Experience">Experience</Link>
          </p>
          <p className=" py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
            <Link to="/Education">Education</Link>
          </p>

          <p className="py-4 text-gray-800 hover:text-gray-700  text-3xl text-center ">
            <Link to="/Contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
