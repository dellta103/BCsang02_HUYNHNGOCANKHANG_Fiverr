import React from "react";
import "./Header.scss";
import logo from "../../logos/fiverr-logo.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

export default function Header() {
  let navigate = useNavigate();
  let { userInfo } = useSelector((state) => state.userSlice);
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-400 ">
      <div className="w-9/12  navBar m-auto  flex items-center justify-between">
        <div className="flex space-x-10">
          <img src={logo} alt="" />
          <Search
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
          />
        </div>
        <ul className="flex items-center h-full space-x-5">
          <li className="font-medium text-black">
            <a href="#">Become a Seller</a>
          </li>
          <li>
            {userInfo?._id ? (
              <div>
                <div
                  className="user"
                  onClick={() => {
                    navigate("/user");
                  }}
                ></div>
              </div>
            ) : (
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
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
