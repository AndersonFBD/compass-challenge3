import { PiSuitcaseRolling } from "react-icons/pi";

const CategoryCard = () => {
  return (
    <div
      className="w-44 h-52 flex flex-col p-4 m-2 
    bg-white border border-black shadow justify-evenly text-left"
    >
      <div className="rounded-full w-fit p-2  bg-[#FC5056] text-white">
        <PiSuitcaseRolling size={24} />
      </div>
      <div className="flex flex-col">
        <p className="font-work font-bold text-lg">Adventure</p>{" "}
        <div>
          <p className="font-inter text-[#a9afbb]">10 Tours+</p>
        </div>
      </div>

      <div className="flex justify-start items-baseline">
        <p className="text-[#a9afbb] font-inter text-base mr-2">From:</p>
        <p className="font-kaushan text-xl text-[#fc5056]">$250</p>
      </div>
    </div>
  );
};

export default CategoryCard;
