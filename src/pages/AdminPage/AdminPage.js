import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentAdmin from "./ContentAdmin/ContentAdmin";
export default function AdminPage() {
  let { userInfo } = useSelector((state) => state.userSlice);
  let navigate = useNavigate();
  useEffect(() => {
    if (userInfo?.user.role !== "ADMIN") {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContentAdmin />
    </div>
  );
}
