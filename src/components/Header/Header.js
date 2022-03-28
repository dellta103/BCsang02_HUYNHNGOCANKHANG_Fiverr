import React from "react";
import "./Header.scss";
import logo from "../../logos/fiverr-logo.svg";
export default function Header() {
  return (
    <div className="">
      <div className="w-9/12  navBar m-auto bg-red-400 flex items-center justify-between">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
