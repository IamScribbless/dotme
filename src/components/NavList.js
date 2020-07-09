import React from "react";

function NavList() {
  return (
    <>
      <div className="py-12">
        <div>
          <p className=" py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Home
          </p>
          <p className=" py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Projects
          </p>

          <p className=" py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Education
          </p>

          <p className="py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Experience
          </p>

          <p className="py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Skills
          </p>
          <p className="py-4 text-white hover:text-gray-400  text-3xl text-center ">
            Contact
          </p>
        </div>
      </div>
    </>
  );
}

export default NavList;
