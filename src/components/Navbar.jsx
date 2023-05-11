import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-customblue flex justify-center">
      <div className=" h-36 w-[80%] flex p-8 items-center text-yellow-50 justify-between ">
        <h1 className="text-3xl font-semibold cursor-pointer">
          Select A THEME
        </h1>
        <div className="flex gap-4 cursor-pointer text-lg w-[fit-content]">
          <a className="hover:font-bold" href="/business">
            Business
          </a>
          <a className="hover:font-bold" href="/portfolio">
            Portfolio
          </a>
          <a className="hover:font-bold" href="/personal">
            Personal
          </a>
          <a className="hover:font-bold" href="/event">
            Event
          </a>
          <a className="hover:font-bold" href="/blog">
            Blog
          </a>
          <a className="hover:font-bold" href="/comingsoon">
            Coming soon
          </a>
          <a className="hover:font-bold" href="/others">
            Others
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
