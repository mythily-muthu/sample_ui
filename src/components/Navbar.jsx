import React from "react";
import Business from "../Pages/Business";

const Navbar = () => {
  return (
    <div className="w-full bg-customblue flex justify-center">
      <div className=" h-36 w-[80%] flex p-8 items-center text-yellow-50 justify-between ">
        <h1 className="text-3xl font-semibold cursor-pointer">
          Select A THEME
        </h1>
        <ul className="flex gap-4 cursor-pointer text-lg w-[fit-content]">
          <li className="hover:font-bold">Business</li>
          <li className="hover:font-bold">Portfolio</li>
          <li className="hover:font-bold">Personal</li>
          <li className="hover:font-bold">Event</li>
          <li className="hover:font-bold">Blog</li>
          <li className="hover:font-bold">Coming soon</li>
          <li className="hover:font-bold">Others</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
