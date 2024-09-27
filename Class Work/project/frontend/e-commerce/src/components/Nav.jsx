import React from "react";

const Nav = () => {
  return (
    <nav className="  p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <h1 className=" tracking-widest font-bold text-4xl">DEPOT</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-black text-white px-4 py-4 font-bold  ">PURCHASE</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;