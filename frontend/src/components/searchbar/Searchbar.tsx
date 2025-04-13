import { LuSend } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { useState } from "react";

const Searchbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchDate, setSearchDate] = useState("");

  return (
    <div className="flex justify-evenly flex-row w-[80%] px-10 bg-white border-[#D9D9D9] border-4 rounded-2xl h-24 mx-[10%] text-sm text-left">
      <div className="flex mx-[2%] flex-col w-[16%] justify-center ml-4 items-start ">
        <p className="font-kaushan">Destination:</p>
        <div className="flex pl-2 flex-row w-[75%] justify-between items-center border-[#D9D9D9] border-2 rounded-md">
          <LuSend size={18} />
          <input
            type="text"
            placeholder="Where to go?"
            className="w-32 h-10 outline-none"
          />
        </div>
      </div>
      <div className="flex mx-[2%] flex-col w-[16%] justify-center ml-4 items-start ">
        <p className="font-kaushan">Type:</p>
        <div
          className="flex pl-2 flex-row w-[75%] 
        justify-between items-center 
        border-[#D9D9D9] border-2 rounded-md"
        >
          <CiFlag1 size={18} />
          <input
            type="text"
            placeholder="Activity"
            className="w-32 h-10 outline-none"
          />
        </div>
      </div>
      <div className="flex mx-[2%] flex-col w-[16%] justify-center ml-4 items-start ">
        <p className="font-kaushan">When:</p>
        <div className="flex flex-row pl-2 w-[75%] justify-between items-center border-[#D9D9D9] border-2 rounded-md">
          <CiCalendar size={18} />
          <input
            type="date"
            id="dateInput"
            placeholder="Date"
            className="w-32 h-10 outline-none"
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mx-[2%] flex-col w-[16%] justify-center ml-4 items-start ">
        <p className="font-kaushan">Guests:</p>
        <div className="flex flex-row pl-2 w-[75%] justify-between items-center border-[#D9D9D9] border-2 rounded-md">
          <LuUsers2 size={18} />
          <input
            type="number"
            placeholder="0"
            className="w-32 h-10 outline-none"
          />
        </div>
      </div>
      <div className="flex mx-[2%] mt-5 flex-col w-[15%] justify-center ml-4 items-center ">
        <button
          type="button"
          className="w-28 h-10 rounded-lg bg-[#FC5056] text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
