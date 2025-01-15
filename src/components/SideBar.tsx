import React from "react";
import avatar from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className=" w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 fixed"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#141414]">
          <div className="flex flex-col items-center justify-center align-center mx-auto mb-8">
            <img
              className="w-40 h-40 rounded-full mb-2 object-cover object-center"
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
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-black rounded-lg bg-white group"
                    : "flex items-center p-2 text-[#5a5a5a] rounded-lg hover:text-black hover:bg-white group active:bg-white"
                }
                to="/portfolio"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Portefølje
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
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
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
