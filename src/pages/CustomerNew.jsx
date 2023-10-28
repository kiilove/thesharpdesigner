import React from "react";
import { TitleBasicType } from "../components/ComponentTitles";
import { Button, Form, Input, Space } from "antd";

const CustomerNew = () => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="flex w-full h-full bg-white rounded-lg flex-col justify-start items-start p-6">
      <div className="flex w-full h-auto">
        {TitleBasicType({ titleText: "고객등록" })}
      </div>
      <Form onFinish={onFinish} form={form} {...layout}>
        <Form.Item label="이름" name="customerName">
          <Input />
        </Form.Item>
        <Form.Item label="전화번호" name="customerTel">
          <Space size={10}>
            <Input />
          </Space>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Primary Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomerNew;
