import React, { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons
import { FaHome } from "react-icons/fa";
import { GoSingleSelect } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { AuthContext } from "../providers/AuthProviders";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); 
  const {logOut, user} = useContext(AuthContext);


  // ------------------products menu-------------
  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  /////////-------------navbar toggle button-----------
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      {/* ----------------Toggle button---------------------- */}
      <div className="md:hidden">
        <button
          className="p-4"
          onClick={toggleNavbar}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'} // Accessibility label
        >
          {/* ---------------Toggle icon----------------- */}
          {isOpen ? (
            <FiX className="w-6 h-6 text-gray-100" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* --------------Sidebar--------------------------- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        onClick={closeNavbar} // Close navbar on click (optional)
      >
        <div className="p-4 text-2xl text-orange mt-8 font-bold">Fresh Mart</div>
        <div className="p-4  text-white mb-4 font-semibold flex">
          <div>
          <RiAdminFill className=" text-5xl me-2" />
          </div>
          <div className="text-md">
            {/* <p>{user.email}</p> */}
            <p>Admin</p>
          </div>
        </div>
        <ul className="mt-4 space-y-6 text-xl">
          <li className="px-4 py-2 hover:bg-gray-700"><NavLink to='/home/dashboard'><FaHome className="inline me-2"/>Dashboard</NavLink></li>
          <li
            className="px-4 py-2 hover:bg-gray-700" 
          > 
            <AiFillProduct className="inline me-2" />Products <GoSingleSelect className="inline ms-2" onClick={toggleProductsMenu} />
            {/* ---------------Products submenu---------------- */}
            {isProductsOpen && (
              <ul className="ml-4 space-y-2">
                <li className="mt-3 px-2 py-1 hover:bg-gray-700"><NavLink to="/home/products">Products View</NavLink> </li>
                <li className="px-2 py-1 hover:bg-gray-700"><NavLink to='/home/products-admin-view'>Products Admin View</NavLink></li>
              </ul>
            )}
            
          </li>
          <li className="px-4 py-2 hover:bg-gray-700"><NavLink to="/home/orders"><MdLocalShipping className="inline me-2" />Orders</NavLink></li>
          <li className="px-4 py-2 hover:bg-gray-700"><NavLink to="/home/customers"><CgProfile className="inline me-2" />Customers</NavLink></li>
          <li onClick={()=>logOut}  className="flex items- px-4 py-2 hover:bg-gray-700"><CgLogOut className="inline me-2" />LogOut</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
