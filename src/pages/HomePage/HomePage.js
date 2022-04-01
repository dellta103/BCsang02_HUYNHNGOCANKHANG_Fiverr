import React, { useEffect } from "react";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import HeaderHome from "./HeaderHome/HeaderHome";
import CarouselHome from "./CarouselHome/CarouselHome";
import Carousel2Home from "./Carousel2Home/Carousel2Home";
import ContentHome from "./ContentHome/ContentHome";
export default function HomePage() {
  let { userInfo } = useSelector((state) => state.userSlice);
  useEffect(() => {
    console.log(userInfo);
  });
  return (
    <div>
      <HeaderHome />
      <CarouselHome />
      <div className="brands flex items-center  text-center">
        <div className="content flex justify-around  w-3/4 m-auto">
          <span
            className="text-lg mt-3 font-semibold"
            style={{
              color: "#b7bbc3",
            }}
          >
            Trusted by:
          </span>
          <ul className="flex space-x-10">
            <li>
              <img src="./img/fb.png" alt="" />
            </li>
            <li>
              <img src="./img/gg.png" alt="" />
            </li>
            <li>
              <img src="./img/nf.png" alt="" />
            </li>
            <li>
              <img src="./img/pg.png" alt="" />
            </li>
            <li>
              <img src="./img/pp.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <Carousel2Home />
      <ContentHome />
    </div>
  );
}
