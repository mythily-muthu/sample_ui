import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/business");
  let navigate = useNavigate();
  // let obj = {
  //   title: "Business",
  //   link: "/business",
  // };
  const navList = [
    {
      title: "Business",
      link: "/business",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Personal",
      link: "/personal",
    },
    {
      title: "Event",
      link: "/event",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Coming soon",
      link: "/comingsoon",
    },
    {
      title: "Others",
      link: "/others",
    },
  ];
  console.log("activePage", activePage);

  const handleClick = (link) => {
    setActivePage(link);
    navigate(link);
  };
  return (
    <div className="w-full bg-customblue flex justify-center ">
      <div className=" h-28 w-[80%] flex p-8 items-center text-yellow-50 justify-between ">
        <a className="text-3xl font-semibold cursor-pointer" href="/">
          Select A THEME
        </a>
        <div className="flex gap-4 cursor-pointer text-lg w-[fit-content]">
          {navList.map((item) => {
            return (
              <p
                className={`hover:font-bold ${
                  activePage === item.link && "text-black underline"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.link);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
