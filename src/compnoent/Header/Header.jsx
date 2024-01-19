import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  let NavLinkCSS = ({ isActive }) => {
    return {
      fontWeight: isActive ? { color: "red" } : "normal",
      fontSize: isActive ? { color: " " } : "color:red",
    };
  };
  return (
    <>
      <p className="text-white text-sm  text-center mt-10">
        Asia's biggest mental health campaign launched:{" "}
        <NavLink to="https://www.instagram.com/mindpeers.co/">
          Adulting With MindPeers!{" "}
        </NavLink>
      </p>

      <header>
        <div className=" mt-16   ">
          <ul className="flex justify-center gap-20    ">
            <li>
              <img className="-mt-3" src="images/logo.webp" height="25" width="220"></img>
              <NavLink to="/"></NavLink>{" "}
            </li>
            <li className="text-white text-xl font-semibold ">
              <NavLink to="/home">For Individual</NavLink>{" "}
            </li>
            <li className="text-white text-xl font-semibold ">
              <NavLink to="/team">For Team</NavLink>{" "}
            </li>
            <li className="text-white text-xl font-semibold ">
              <NavLink to="/Coaches">For Mind Coaches</NavLink>{" "}
            </li>
            <li className="text-white text-xl font-semibold ">
              {" "}
              <NavLink to="/ourScience">Our Science</NavLink>{" "}
            </li>
            <button className="px-5 py-2  bg-white rounded-lg hover ">TRY THERAPY</button>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
