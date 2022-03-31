import React from "react";
import logo from "../../../logos/fiverr-newvector-seeklogo.com-3.svg";
import "./HeaderHome.scss";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-transparent  ">
      <div className="w-9/12  navBar m-auto  flex items-center justify-between">
        <div className="flex space-x-10">
          <span className="text-4xl text-white font-bold">
            fiverr
            <span
              style={{
                color: "#1dbf73",
              }}
            >
              .
            </span>{" "}
          </span>
        </div>
        <ul className="flex items-center h-full space-x-5">
          <li className="font-medium ">
            <a href="#" className="text-white seller">
              Become a Seller
            </a>
          </li>
          <li>
            <div className="space-x-3 buttons">
              <button
                className="sign-in-btn rounded-lg font-medium"
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Sign In
              </button>
              <button
                className="rounded-lg font-medium"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Join
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
