import React from "react";
import styles from "./HeaderAdmin.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function HeaderAdmin() {
  let { userInfo } = useSelector((state) => state.userSlice);
  let navigate = useNavigate();
  return (
    <div className={clsx(styles.header)}>
      <div className="w-9/12 m-auto">
        <div className="w-full h-full flex justify-end space-x-3 items-center">
          <img
            src={userInfo?.avatar}
            alt=""
            onClick={() => {
              navigate("/user");
            }}
          />
          <button className={"signOut rounded-lg font-bold "}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
