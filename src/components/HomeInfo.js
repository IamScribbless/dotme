import React from "react";
import Contact from "../pages/Contact";
import ProfilePic from "./ProfilePic";

function HomeInfo() {
  return (
    <div className="flex flex-col justify-center py-6">
      <h1 className="text-6xl text-center justify-center">
        Welcome to My Page!
      </h1>
      <ProfilePic />
      <h2 className="text-xl text-center justify-center px-24">
        Thank you for visiting my online portfilio! I love learning new things,
        and this portfolo is a side project for learning React JS and other
        front end development skills. <br /> I work professionally building
        software not as a developer - but as a UX Researcher! I've had the
        pleasure of building products in several industries and product spaces,
        which I hope you'll learn more about exploring this portfolio. Please
        feel free to reach out using the contact info on the contact page for
        inquiries or a virtual coffee.{" "}
      </h2>
    </div>
  );
}
export default HomeInfo;
