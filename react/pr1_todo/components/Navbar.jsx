import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-indigo-400 text-white py-1.5">
      <div className="logo">
        <span className="font-bold text-xl mx-9">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar