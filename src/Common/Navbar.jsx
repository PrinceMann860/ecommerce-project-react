import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "../assets/logo 12.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <div className="m-0 p-0 max-w-screen">
      <nav className="flex justify-between bg-black h-[100px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[100px] h-auto" />
          <h1 className="text-3xl text-white">
            Quick<span className="text-yellow-400">Buy</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex text-white gap-6 text-2xl">
            {/* Nav Links */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Products</li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Category</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Help</li>
            </NavLink>
          </ul>
        </div>

        {/* Cart, Login, and Mobile Menu */}
        <div className="flex gap-2 items-center mr-10 text-white relative">
          {/* Cart Icon */}
          <NavLink to="/cart">
            <MdOutlineShoppingCart size={30} />
          </NavLink>

          {/* Login Button */}
          <Link to="/login"><button className="hidden lg:flex bg-yellow-400 text-black px-5 py-1 font-semibold rounded-md">
            Log in
          </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <FaBars size={30} className="lg:hidden mr-[-10px]" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white text-2xl p-4">
          <ul className="flex flex-col gap-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Products</li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Category</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Help</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}
