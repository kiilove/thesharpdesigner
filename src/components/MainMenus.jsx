import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MainMenus = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "item1",
      icon: <MailOutlined />,
      children: [
        {
          key: "option1",
          label: "서브1",
          onClick: () => {
            navigate("/");
          },
        },
      ],
      label: "기초데이터",
      
    },
  ];
  return (
    <Menu
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MainMenus;
