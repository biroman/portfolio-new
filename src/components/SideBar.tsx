import React from "react";
import avatar from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <aside
      className={`fixed md:fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#141414]">
        <div className="flex flex-col items-center justify-center align-center mx-auto mb-8">
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-2 object-cover object-center"
            src={avatar}
            alt="Rounded avatar"
          />
          <h1 className="mx-auto mb-4 text-white object-cover object-center">
            Eivind Buodd
          </h1>
        </div>
        <ul className="space-y-2 font-medium nav">
          <li>
            <NavLink
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-black rounded-lg bg-white group"
                  : "flex items-center p-2 text-[#5a5a5a] rounded-lg hover:text-black hover:bg-white group active:bg-white"
              }
              to="/about"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Om</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-black rounded-lg bg-white group"
                  : "flex items-center p-2 text-[#5a5a5a] rounded-lg hover:text-black hover:bg-white group active:bg-white"
              }
              to="/portfolio"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Portefølje</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-black rounded-lg bg-white group"
                  : "flex items-center p-2 text-[#5a5a5a] rounded-lg hover:text-black hover:bg-white group active:bg-white"
              }
              to="/contact"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Kontakt</span>
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-2">
          {" "}
          <a
            href="https://github.com/biroman/portfolio-new"
            target="_blank"
            className="text-[#5a5a5a] hover:text-white"
          >
            Github til denne siden
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
