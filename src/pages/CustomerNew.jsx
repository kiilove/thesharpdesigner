import React from "react";
import { TitleBasicType } from "../components/ComponentTitles";

const CustomerNew = () => {
  return (
    <div className="flex w-full h-full bg-white rounded-lg flex-col justify-start items-start">
      <div className="flex w-full h-auto p-2 ">
        {TitleBasicType({ titleText: "고객등록" })}
      </div>
    </div>
  );
};

export default CustomerNew;
