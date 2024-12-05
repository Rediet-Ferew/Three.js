import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const NavBar = ({ setActiveColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  const navItems = [
    { id: "home", label: "Home", color: "#ff6f61" },
    { id: "about", label: "About", color: "#f7a440" },
    { id: "projects", label: "Projects", color: "#4caf50" },
    { id: "contact", label: "Contact", color: "#2196f3" },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.id);
    setActiveColor(item.color);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        <a
          href="/"
          className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
        >
          Rediet
        </a>

        {/* Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="text-neutral-300 w-6 h-6 sm:hidden focus:outline-none"
        >
          {isOpen ? <IoClose /> : <TiThMenu />}
        </button>

        {/* Nav Items */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center space-x-6`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-lg font-medium transition-colors ${
                activeNav === item.id
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
