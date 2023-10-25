import React from "react";
import MainMenus from "../components/MainMenus";

const Main = () => {
  return (
    <div className="flex w-full min-h-full">
      <div
        className="flex"
        style={{ minWidth: "100px", maxWidth: "250px", width: "30%" }}
      >
        <MainMenus />
      </div>
    </div>
  );
};

export default Main;
