import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="border-t border-gray-400 mt-20">
      <div className="w-9/12 m-auto py-20">
        <div className="defaultFooter grid grid-cols-5">
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Categories</span>
            <li>
              <a href="#">Graphics & Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Writing & Translation</a>
            </li>
            <li>
              <a href="#">Video & Animation</a>
            </li>
            <li>
              <a href="#">Music & Audio</a>
            </li>
            <li>
              <a href="#">Programming & Tech</a>
            </li>
            <li>
              <a href="#">Data</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">About</span>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press & News</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Intellectual Property Claims</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Support</span>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Selling on Fiverr</a>
            </li>
            <li>
              <a href="#">Buying on Fiverr</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Community</span>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">Community Standards</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Invite a Friend</a>
            </li>
            <li>
              <a href="#">Become a Seller</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">More From Fiverr</span>
            <li>
              <a href="#">Fiverr Business</a>
            </li>
            <li>
              <a href="#">Fiverr Pro</a>
            </li>
            <li>
              <a href="#">Fiverr Studios</a>
            </li>
            <li>
              <a href="#">Fiverr Logo Maker</a>
            </li>
            <li>
              <a href="#">Fiverr Guides</a>
            </li>
            <li>
              <a href="#">Get Inspired</a>
            </li>
            <li>
              <a href="#">ClearVoice</a>
            </li>
            <li>
              <a href="#">Fiverr Workspace</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">Working Not Working</a>
            </li>
          </ul>
        </div>
        <div className="bottom py-3 border-t border-gray-400 mt-3">
          <span className="text-gray-400 font-medium text-3xl">fiverr.</span>{" "}
          <span>© Fiverr International Ltd. 2022</span>
        </div>
      </div>
    </div>
  );
}
