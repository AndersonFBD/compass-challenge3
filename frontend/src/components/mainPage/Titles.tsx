import React from "react";

interface ComponentTexts {
  title: string;
  BoldText: string;
}

const Titles: React.FC<ComponentTexts> = ({ title, BoldText }) => {
  return (
    <div id="title-section" className="flex flex-col items-center">
      <div className="flex flex-row items-baseline">
        <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
        <p className="font-kaushan mx-1 z-10 text-[#fc5056] text-[24px] ">
          {title}
        </p>
        <div className="h-2 -z-10 w-[131px] border-t-2 border-[#A9AFBB]"></div>
      </div>
      <p className="font-work text-[40px] font-bold">{BoldText}</p>
    </div>
  );
};

export default Titles;
