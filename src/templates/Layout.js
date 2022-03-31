import React from "react";
import Header from "../components/Header/Header";
import JobBar from "../components/JobBar/JobBar";
import "./Layout.scss";
export default function Layout({ Component }) {
  return (
    <div
      style={{
        backgroundColor: "#1dbf73",
        height: "100vh",
      }}
    >
      <Header />

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <div className="w-full bg-white">
          <div className=" w-9/12 m-auto">
            <JobBar />
          </div>
        </div>
        <Component />
      </div>
    </div>
  );
}
