import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { userService } from "../../../services/userService";
export default function FormSignUp() {
  const { Option } = Select;

  const onFinish = (values) => {
    handleSignUp(values);
    // console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSignUp = (values) => {
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <span className="text-4xl font-semibold">Join us</span>

      <Form.Item
        style={{
          marginTop: "30px",
        }}
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Full Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your Phone Number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <div className="flex justify-between">
          <button>Submit</button>
        </div>
      </Form.Item>
    </Form>
  );
}
