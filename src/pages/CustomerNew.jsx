import React, { useEffect, useRef } from "react";
import { TitleBasicType } from "../components/ComponentTitles";
import { Button, Card, Form, Input, Select, Space } from "antd";

const CustomerNew = () => {
  const formRef = useRef();
  const [form] = Form.useForm();
  const { Option } = Select;
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

  const onChecked = () => {
    const initValues = { customerName: "", customerTel: "" };
    formRef?.current.setFieldsValue({ ...initValues });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="flex w-full h-full bg-white rounded-lg flex-col justify-start items-start p-6">
      <div className="flex w-full h-auto">
        {TitleBasicType({ titleText: "고객등록" })}
      </div>
      <Card title="기본정보" style={{ maxWidth: 400, width: "25%" }}>
        <Form onFinish={onFinish} form={form} {...layout} ref={formRef}>
          <Form.Item label="이름" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="전화번호" name="telNumber">
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="성별"
            rules={[
              {
                required: true,
                message: "성별을 선택해주세요",
              },
            ]}
          >
            <Select allowClear>
              <Option value="남자">남자</Option>
              <Option value="여자">여자</Option>
              <Option value="제3의성">기타</Option>
            </Select>
          </Form.Item>
          <Form.Item label="연령대" name="ageRange">
            <Select allowClear>
              <Option value="10">10대</Option>
              <Option value="20">20대</Option>
              <Option value="30">30대</Option>
              <Option value="40">40대</Option>
              <Option value="50">50대</Option>
              <Option value="60">60대</Option>
              <Option value="70">60대이상</Option>
              <Option value="100">생년월일입력</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space size={20}>
              <Button type="default" htmlType="button" onClick={onChecked}>
                체크
              </Button>
              <Button type="default" htmlType="submit">
                전송
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CustomerNew;
