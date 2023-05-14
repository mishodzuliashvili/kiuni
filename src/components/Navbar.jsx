import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-10 justify-between">
      <div className="flex items-center gap-10">
        <Link to="" className="font-bold text-xl">
          KIU Finder
        </Link>
        <Link to="/discover" className="hidden md:block">
          Discover
        </Link>
      </div>
      <div>
        <Link to="/login" className="border-2 rounded-full px-5 py-3">
          Log in
        </Link>
      </div>
    </nav>
  );
}
