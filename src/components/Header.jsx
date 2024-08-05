import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/B.png";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className={`header-content ${isSticky ? "sticky" : ""}`}>
      <nav className="flex justify-between items-center p-4">
        <img src={logo} alt="logo" className="w-16 h-14 pl-4" />
        <FaGithub className="header-icon" />
      </nav>
      </div>
    </motion.header>
  );
};

export default Header;
