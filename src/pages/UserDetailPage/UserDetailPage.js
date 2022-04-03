import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../components/redux/slices/userSlice";
import { userService } from "../../services/userService";
import "./UserDetailPage.scss";
export default function UserDetailPage() {
  let { userInfo } = useSelector((state) => state.userSlice);
  let dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(setAvatar(e.target.files[0]));
    userService
      .uploadAvatar(e.target.files[0])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(e.target.files[0]);
  };
  return (
    <div className="bg-gray-300">
      <div className="w-9/12 m-auto ">
        <div className="left">
          <div className="top rounded-lg shadow-lg py-4">
            <div className="user">
              <label className="avatar m-auto" id="avatar">
                <span className="text-3xl font-semibold text-white">
                  {userInfo?.email[0].toUpperCase()}
                </span>
                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                />
              </label>
              <div className="text w-10/12">
                <div className="text-top flex justify-between">
                  <span>
                    <i className="fa fa-map-marker-alt"></i> From
                  </span>
                  <p>Vietnam</p>
                </div>
                <div className="text-bottom flex justify-between">
                  <span>
                    <i className="fa fa-user"></i> Member since
                  </span>
                  <p>May 2021</p>
                </div>
              </div>
            </div>
            <div className="info"></div>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
