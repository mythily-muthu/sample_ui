import React from "react";

const Addvertisement = () => {
  return (
    <div className="w-full">
      <div className="bg-addblue w-full p-20 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Make your own website</h1>
        <p className="p-10 flex items-center justify-center text-white text-center">
          Whether you're growing your business, selling online or establishing
          an online presence - discover the easiest way to get online with the
          Website.com website builder. Get A Free Website Now
        </p>
        <div className="p-2 bg-white font-medium text-sm hover:font-bold rounded-lg">
          <button className="hover:cursor-pointer text-customblue">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addvertisement;
