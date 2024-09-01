/* eslint-disable @typescript-eslint/no-unused-vars */
import { TourProps } from "../../types/tourProps";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const TourCard: React.FC<TourProps> = ({
  id,
  countryId,
  categoryId,
  city,
  title,
  overview,
  duration,
  price,
  max_people,
  min_age,
  imageurl,
  country,
  reviews,
  avgRating,
}: TourProps) => {
  return (
    <Link to={`/tour/${id}`}>
      <div
        id="card"
        className="w-[270px] mx-3 bg-[#F7F8FA] border border-gray-200  shadow"
      >
        <img
          className="rounded-t-lg max-w-[100%] max-h-48"
          src={imageurl}
          alt=""
        />

        <div className="p-2 text-left">
          <p className="font-inter text-[12px] text-[#A9AFBB]">{city}</p>
          <p className="mb-2 text-[18px] w-56 font-work font-bold tracking-tight text-gray-900">
            {title}
          </p>
        </div>
        <div className="py-2 flex flex-row justify-between border-b-2 border-[#A9AFBB] mx-3 my-3">
          <div className="flex flex-row justify-evenly items-center">
            <div className="flex flex-row justify-evenly w-10 rounded items-center font-inter text-white bg-[#FC5056] mr-1 px-1">
              <CiStar size={16} />
              <p className="font-inter text-[16px]">0</p>
            </div>
            <div className="px-1 mx-1">
              <p className="font-inter text-base text-[#A9AFBB]">0 reviews</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-20">
            <CiClock2 size={16} />
            <p className="text-[#AFA9BB] text-base font-inter">
              {duration} days
            </p>
          </div>
        </div>
        <div className="flex flex-row py-2 justify-between mx-4 items-center align-middle">
          <div>
            <p className="font-inter text-[#A9AFBB] text-base">Starting From</p>
          </div>
          <div>
            <p className="font-kaushan font-black text-xl ">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
