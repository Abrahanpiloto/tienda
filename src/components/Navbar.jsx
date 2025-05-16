import React from "react";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white text-md px-5">
      {/* Home */}
      <li>
        <Link
          to={"/"}
          className="hover:text-cyan-500 transition-colors duration-200"
        >
          Inicio
        </Link>
      </li>

      {/* All Product */}
      <li>
        <Link
          to={"/allproduct"}
          className="hover:text-cyan-500 transition-colors duration-200"
        >
          Productos
        </Link>
      </li>

      {/* Signup */}
      <li>
        <Link
          to={"/signup"}
          className="hover:text-cyan-500 transition-colors duration-200"
        >
          Salir
        </Link>
      </li>

      {/* User */}
      <li>
        <Link
          to={"/"}
          className="hover:text-cyan-500 transition-colors duration-200"
        >
          Abrahan
        </Link>
      </li>

      {/* Admin */}
      {/* <li>
        <Link to={"/admin"} className="hover:text-orange-500 transition-colors duration-200">Admin</Link>
      </li> */}

      {/* logout */}
      {/* <li>
        <Link to={"/logout"} className="hover:text-orange-500 transition-colors duration-200">Logout</Link>
      </li> */}

      {/* Cart */}
      <li>
        <Link
          to={"/cart"}
          className="hover:text-cyan-500 transition-colors duration-300"
        >
          Cesta(0)
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-neutral-950 fixed top-0 w-full z-50">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold italic text-cyan-400 text-2xl text-center">
              e-valenciana
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
