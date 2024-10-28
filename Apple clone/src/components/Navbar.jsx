import React from "react";
import { appleImg, bagImg } from "../utils";
import { searchImg } from "../utils";
import { navLists } from "../constants";


function Navbar() {
  return (
    <header className="w-full p-5 sm:px-10  px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={30} height={200} />
        <div className=" flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div key={nav} className="px-5 text-lg cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
          ))}
        </div>

        <div className="flex  items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={30} height={200} />
          <img src={bagImg} alt="bag" width={30} height={200} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;