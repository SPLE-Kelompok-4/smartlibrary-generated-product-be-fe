import React from "react";
import { Link } from "react-router";
import { FiLogOut, FiMenu, FiHome, FiBook, FiHeart, FiStar, FiUsers } from "react-icons/fi";
import Brand from "../Brand";
import NavbarItem from "./NavbarItem";
import useNavigation from "./useNavigation";
import useAuth from "@/commons/auth";

const Navbar = React.memo(function Navbar() {
  const { checkPermission } = useAuth();
  const { handleLogout, isAuthenticated, isNotAuthPage, navbarMenus } =
    useNavigation();

  const appNavLinks = [
    { 
      icon: <FiHome className="w-5 h-5 mr-1" />, 
      label: "Home", 
      to: "/" 
    },
    { 
      icon: <FiBook className="w-5 h-5 mr-1" />, 
      label: "EBooks", 
      to: "/ebook" 
    },
    { 
      icon: <FiHeart className="w-5 h-5 mr-1" />, 
      label: "Wishlist", 
      to: "/item/wishlist" 
    },
    { 
      icon: <FiStar className="w-5 h-5 mr-1" />, 
      label: "Reviews", 
      to: "/review" 
    },
    { 
      icon: <FiUsers className="w-5 h-5 mr-1" />, 
      label: "Community", 
      to: "/communitycontent" 
    }
  ];

  return (
    <nav className="sticky top-0 navbar justify-between w-full py-0 px-4 bg-primary text-primary-content z-20 shadow-xl">
      <Brand />
      <div className="menu-horizontal p-2 hidden lg:flex lg:flex-wrap">
        {appNavLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="btn btn-ghost items-center gap-1 text-primary-content normal-case"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
      
      
      {isNotAuthPage && (
        <div className="menu-horizontal p-2 hidden lg:flex lg:flex-wrap">
          {navbarMenus.map((menu) => (
            <NavbarItem {...menu} key={menu.label} checkPermission={checkPermission} />
          ))}
          <Link
              to={"/login"}
              className="btn btn-primary bg-base-100 text-base-content hover:text-base-primary"
            >
              Masuk
            </Link>
        </div>
      )}
      
      {isAuthenticated && (
        <button
          className="btn btn-ghost items-center gap-2 text-primary-content normal-case hidden lg:inline-flex"
          onClick={handleLogout}
        >
          <FiLogOut className="w-5 h-5" />
          Keluar
        </button>
      )}
      
      {isNotAuthPage && (
        <label
          htmlFor="navigation-sidebar"
          className="flex-none lg:hidden btn btn-square btn-ghost"
        >
          <FiMenu className="w-6 h-6" />
        </label>
      )}
    </nav>
  );
});

export default Navbar;