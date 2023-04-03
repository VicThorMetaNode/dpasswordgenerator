import React from "react";
import avatar from "../assets/images/avatar.png";

const Navbar = () => {
  return (
    <div className=" w-full bg-gray">
      <div className="flex flex-row justify-start items-center ">
        <div className="ml-2">
          <img
            src={avatar}
            alt="avatar picture"
            className="rounded-full h-[3rem] w-[3rem] bg-blk"
          />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-main uppercase text-white font-bold">
            d-Password Generator
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
