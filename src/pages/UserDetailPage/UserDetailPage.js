import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../components/redux/slices/userSlice";
import { userService } from "../../services/userService";
import { jobService } from "../../services/jobService";
import "./UserDetailPage.scss";
export default function UserDetailPage() {
  let { userInfo } = useSelector((state) => state.userSlice);
  let dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState([]);
  const changeHandler = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result);
      };
    }
    let data = new FormData();
    data.append("avatar", file);
    userService
      .uploadAvatar(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleSkills = (values, id) => {
    userService
      .editInfo(values, id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-gray-300">
      <div className="w-9/12 m-auto ">
        <div className="left">
          <div className="top rounded-lg shadow-lg py-4">
            <div className="user">
              <label className="avatar m-auto" id="avatar">
                {userInfo?.avatar ? (
                  <img src={userInfo.avatar} alt="" />
                ) : (
                  <span className="text-3xl font-semibold text-white">
                    {userInfo?.email[0].toUpperCase()}
                  </span>
                )}

                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                  accept="image/png,image/jpeg,image/gif,image/jpg"
                />
              </label>
              <br />

              <div className="text w-10/12">
                <div className="text-top flex justify-between">
                  <span className="font-medium">
                    <i className="fa fa-map-marker-alt"></i> From
                  </span>
                  <p className="font-semibold text-gray-500">Vietnam</p>
                </div>
                <div className="text-bottom flex justify-between">
                  <span className="font-medium">
                    <i className="fa fa-user"></i> Member since
                  </span>
                  <p className="font-semibold text-gray-500">May 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom p-3">
            <div className="info">
              <div className="desc flex justify-between ">
                <span className="font-medium">Description</span>
                <a href="#" className="font-medium">
                  Edit Description
                </a>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Languages</span>
                <a href="#" className="font-medium">
                  Add New
                </a>
              </div>
              <hr className="my-4" />
              <div className="links">
                <span className="font-medium">Linked Accounts</span>
                <ul className="space-y-2 mt-2">
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Google</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Dribble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Stack Overflow</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Vimeo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="my-4" />
              <div className="skills">
                <div className="skills-top flex justify-between">
                  <span className="font-medium">Skills</span>
                  <a
                    href="#"
                    className="font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Add New
                  </a>
                </div>
                {/* <div className={`edit-skill ` + (show ? "block" : "hidden")}>
                  <input
                    type="text"
                    name="skill"
                    onChange={(e) => {
                      setSkill([...e.target.value]);
                    }}
                  />
                  <button
                    id="skill"
                    type="submit"
                    onClick={() => {
                      handleSkills(skill, userInfo._id);
                    }}
                  >
                    Save Changes
                  </button>
                </div> */}
                <div className="skills-bottom "></div>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Education</span>
                <a href="#" className="font-medium">
                  Add New
                </a>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Certifications</span>
                <a href="#" className="font-medium">
                  Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
