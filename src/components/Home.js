import React from "react";
import ProjectCard from "./ProjectCard";

function Home() {
  return (
    <div className="container mx-auto py-12">
      <div className=" grid grid-rows-3 grid grid-cols-3">
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
        <div>
          {" "}
          <ProjectCard />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
