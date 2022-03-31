import React, { useState, useEffect } from "react";
import "./JobBar.scss";
import { jobService } from "../../services/jobService";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
export default function JobBar() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    handleGetJobList();
  }, []);

  const handleGetJobList = () => {
    jobService
      .getMainJobList()
      .then((res) => {
        console.log(res.data);
        setJobList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   const renderJobList = (values) => {
  //     for (let i = 0; i < 9; i++) {
  //       //   const menu = (
  //       //     <Menu>
  //       //       <Menu.Item>
  //       //         <a
  //       //           target="_blank"
  //       //           rel="noopener noreferrer"
  //       //           href="https://www.antgroup.com"
  //       //         >
  //       //           {values[i].subTypeJobs.map((item) => {
  //       //             return item.name;
  //       //           })}
  //       //         </a>
  //       //       </Menu.Item>
  //       //     </Menu>
  //       //   );
  //       return (
  //         <Dropdown>
  //           <a
  //             className="ant-dropdown-link w-full text-sm"
  //             onClick={(e) => e.preventDefault()}
  //           >
  //             {values[i].name}
  //           </a>
  //         </Dropdown>
  //       );
  //     }
  //   };
  return (
    <div className="jobBar flex items-center space-x-5">
      {/* {renderJobList(jobList)} */}
    </div>
  );
}
