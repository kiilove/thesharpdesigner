import React from "react";
import MainMenus from "../components/MainMenus";
import { defaultBgColor } from "../constColors";
import CustomerNew from "./CustomerNew";

const Main = ({ children }) => {
  return (
    <div
      className="flex w-full"
      style={{ backgroundColor: defaultBgColor, minHeight: "100vh" }}
    >
      <div className="flex">
        <MainMenus />
      </div>
      <div className="flex w-full h-full p-2 ">
        <div className="flex w-full h-full ">{children}</div>
      </div>
    </div>
  );
};

export default Main;
