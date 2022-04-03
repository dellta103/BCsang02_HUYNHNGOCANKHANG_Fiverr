import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./JobsPage.scss";
export default function JobsPage() {
  let navigate = useNavigate();
  let { userInfo } = useSelector((state) => state.userSlice);

  return <div>JobsPage</div>;
}
