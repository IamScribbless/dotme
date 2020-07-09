import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto py-12 overflow-auto  ">
      <div>
        <p className="font-bold text-3xl "> Projects and Product Experience</p>
      </div>
      <div className=" grid grid-rows-4 grid grid-cols-2">
        <ProjectCard
          image="./images/ab.jpg"
          title="Amazon Business"
          description="Amazon Business is the B2B marketplace on Amazon, providing business customers with the pricing, selection, and convenience of Amazon, with features and benefits designed for businesses of all sizes. Manufacturers and distributors who are new to Amazon or are existing Professional sellers now have a targeted way to reach business customers on Amazon. With a specialized suite of tools to enable B2B e-commerce, small businesses to large enterprises will find new ways to engage incremental business customers through a trusted Amazon experience."
        />
        <ProjectCard
          image="./images/comet.jpg"
          title="Facebook Web Redesign"
          description="The new Facebook.com is simpler and easier to use, with the features you know and love. Find what you’re looking for faster with new streamlined navigation: it’s never been easier to find videos, games and Groups, and the home page and page transitions load faster. It’s similar to our mobile experience.  Easily create Events, Pages, Groups and ads on Facebook. Preview a new Group you’re starting in real time, and see what it looks like on mobile before you create it. Enjoy lower brightness, alongside contrast and vibrancy, with dark mode. It minimizes screen glare for use in low light, wherever you are.  "
        />
        <ProjectCard
          image="./images/fblive.jpg"
          title="Facebook Live"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProjectCard
          image="./images/fbwatch.png"
          title="Facebook Watch"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProjectCard
          image="./images/nf.png"
          title="Facebook News Feed"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProjectCard
          image="./images/lasso.jpg"
          title="Lasso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />

        <ProjectCard
          image="./images/omen.jpg"
          title="HP OMen"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProjectCard
          image="./images/methodistapp.webp"
          title="Houston Methodist Patient Care Mobile App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </div>
  );
};

export default Projects;
