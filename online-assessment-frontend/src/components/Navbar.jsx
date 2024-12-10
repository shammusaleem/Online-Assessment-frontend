import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600">
      <div className="flex items-center space-x-3">
        <img src="/images/logo.png" alt="Platform Logo" className="w-10 h-10" />
        <h1 className="text-white text-xl font-bold">Online Assessment</h1>
      </div>
      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
