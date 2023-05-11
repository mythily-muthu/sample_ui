import React from "react";

const Footer = () => {
  return (
    <div className="bg-customblue text-white text-lg p-1 flex justify-between items-center fixed bottom-0 left-0 w-full">
      <p className=" flex items-center px-5">Copyright termly @ 2023</p>
      <img
        className="w-[150px] h-8 px-5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Hm9UeUyXQMPsdP9DiYSu9q-WESdjfOV5F2F0BLtWvkWcHiOqYns9m3-9kv1_duOqyw&usqp=CAU"
        alt="copyright"
      />
    </div>
  );
};

export default Footer;
