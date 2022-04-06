import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../logos/fiverr-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Space } from "antd";
import { filterJobs, setSearch } from "../redux/slices/jobSlice";
import "antd/dist/antd.css";
import { jobService } from "../../services/jobService";

export default function Header() {
  const [jobs, setJobs] = useState([]);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { userInfo } = useSelector((state) => state.userSlice);
  let { searchValue } = useSelector((state) => state.jobSlice);
  let { filteredJobs } = useSelector((state) => state.jobSlice);
  const { Search } = Input;

  const onSearch = (value) => {
    jobService
      .getJobListByName(value)
      .then((res) => {
        console.log(res.data);
        dispatch(filterJobs(res.data));
      })
      .catch((err) => console.log(err));
    navigate("/jobs");
  };
  return (
    <div className="fixed top-0 z-50 left-0 w-full bg-white border-b border-gray-400 ">
      <div className="w-9/12  navBar m-auto  flex items-center justify-between">
        <div className="flex space-x-10">
          <a href="/">
            <img src={logo} alt="" />
          </a>
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
