// show option to retreive user name
// show option for users to input location 

import React from 'react';
import { Button, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Settings = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: false,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Enter Location"
      name="location"
      rules={[
        {
          required: false,
          message: 'Please input your location here!',
        },
      ]}
    >
      <Input />
      <span style={{ margin: '8px' }}>OR</span>
      <Button type="primary" htmlType="button">
        Get current location
      </Button>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Settings;

