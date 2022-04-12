import React, { Fragment, useEffect, useState } from "react";
import { Table, Tag, Space, Input, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { userService } from "../../../services/userService";
export default function ContentAdmin() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { Search } = Input;
  const onSearch = (value) => {
    userService
      .findUser(value)
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    userService
      .editInfo(
        {
          name: newName,
          email: newEmail,
          phone: newPhone,
        },
        singleUser._id
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = "/admin";
      })
      .catch((err) => {
        console.log(err.response);
      });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <div className="space-x-3">
              <button
                className="rounded-lg w-10"
                onClick={() => {
                  setSingleUser(user);
                  showModal();
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="bg-red-600 rounded-lg w-10"
                onClick={() => {
                  userService
                    .removeUser(user._id)
                    .then((ress) => {
                      console.log(ress);
                      window.location.href = "/admin";
                    })
                    .catch((err) => {
                      console.log(err.response.data);
                    });
                }}
              >
                <i className="fa fa-trash-alt"></i>
              </button>
            </div>
          </Fragment>
        );
      },
    },
  ];
  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        console.log(res);

        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const data = users;
  return (
    <div className="p-3 space-y-5">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} className="font-bold" />
      <Modal
        title={singleUser?.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Name:</p>
        <Input
          value={newName || singleUser?.name}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <p>Email:</p>
        <Input
          value={newEmail || singleUser?.email}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <p>Phone:</p>
        <Input
          value={newPhone || singleUser?.phone}
          onChange={(e) => {
            setNewPhone(e.target.value);
          }}
        />
      </Modal>
    </div>
  );
}
