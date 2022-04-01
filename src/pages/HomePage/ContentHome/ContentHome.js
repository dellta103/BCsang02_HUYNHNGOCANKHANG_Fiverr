import React, { useState } from "react";
import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import "./ContentHome.scss";
export default function ContentHome() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="p-20 contentHome">
      <div className="w-9/12 m-auto flex top">
        <div className="left">
          <span className="text-4xl font-semibold">
            A whole world of freelance talent at your fingertips
          </span>
          <ul className="mt-4">
            <li>
              <span className="text-xl font-medium">
                <i className="fa fa-check-circle"></i> The best for every budget
              </span>
              <p className="text-lg font-normal text-gray-500">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <span className="text-xl font-medium">
                <i className="fa fa-check-circle"></i> Quality work done quickly
              </span>
              <p className="text-lg font-normal text-gray-500">
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <span className="text-xl font-medium">
                <i className="fa fa-check-circle"></i> Protected payments, every
                time
              </span>
              <p className="text-lg font-normal text-gray-500">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <span className="text-xl font-medium">
                <i className="fa fa-check-circle"></i> 24/7 support
              </span>
              <p className="text-lg font-normal text-gray-500">
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div className="right mt-5">
          <img src="./img/vidthumb.png" alt="" onClick={showModal} />
          <i className="fa fa-play" onClick={showModal}></i>
          <Modal
            title="Intro"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={"680px"}
          >
            <ReactPlayer
              controls
              url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
