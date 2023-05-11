import React from "react";
import Addvertisement from "../components/Addvertisement";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center p-16">
        <h1 className="text-5xl font-semibold">Website templates made easy</h1>
        <p className="p-7 text-xl">
          Explore responsive, stunning customizable website template designs
          tailored to thrive in your industry.
        </p>
        <div className="p-3 bg-customblue text-white font-medium text-xl hover:font-bold">
          <button className="hover:cursor-pointer ">
            Create your website now.
          </button>
        </div>
      </div>
      <Addvertisement />
    </div>
  );
};

export default Home;
