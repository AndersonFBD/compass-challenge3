import { LiaFacebook } from "react-icons/lia";
import { PiTwitterLogo } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex
     flex-row 
     justify-center 
     bg-black 
     text-white 
     h-auto 
     min-w-[100%] 
     mt-auto 
     px-[0%] 
     py-[3%] 
     border-b-[#EB565A] 
     border-b-[4px]"
    >
      <section
        className="
      flex 
      items-start 
      ml-[5%] 
      w-[20%] 
      border-r-[1px] 
      border-[#A9AFBB] 
      justify-center 
      flex-col"
      >
        <div>
          <div className="flex justify-start h-[32px] mb-2">
            <img
              src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/Logo+White.png"
              alt="logo white"
            />
          </div>
          <div className="flex flex-col justify-end text-left">
            <p className="font-kaushan font-normal text-[#e6e6e6] text-sm mb-0">
              Need any help?
            </p>
            <p className="text-lg font-bold text-[#e6e6e6] w-[80%] mt-0 mb-3">
              Call Us: <span className="text-[#fc5056]">(888)1234 5678</span>
            </p>
            <p className="text-base text-[#e6e6e6] mt-0 w-[70%]">
              Love Street, Muscat, Oman example@trisog.com
            </p>
          </div>
          <div className="mt-3 flex flex-row text-2xl pb-2">
            <Link
              to="http://www.facebook.com/"
              className="align-middle font-bold text-[#e6e6e6] mr-2 hover:decoration-inherit hover:cursor-pointer hover:text-[#e6e6e6]"
            >
              <LiaFacebook />
            </Link>
            <Link
              to="http://www.twitter.com/"
              className="align-middle font-bold text-[#e6e6e6] mr-2 hover:decoration-inherit hover:cursor-pointer hover:text-[#e6e6e6]"
            >
              <PiTwitterLogo />
            </Link>
            <Link
              to="http://www.linkedin.com/"
              className="align-middle font-bold text-[#e6e6e6] mr-2 hover:decoration-inherit hover:cursor-pointer hover:text-[#e6e6e6]"
            >
              <PiLinkedinLogoBold />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="border-r-[1px] 
      border-[#A9AFBB] 
      w-[40%] 
      flex 
      flex-row 
      justify-evenly"
      >
        <div className="flex flex-col text-base text-[#e6e6e6] text-left">
          <p className="font-kaushan text-sm mb-4">Company</p>
          <p className="mb-3">About Us</p>
          <p className="mb-3">Contact Us</p>
          <p className="mb-3">Travel Guides</p>
          <p className="mb-3">Data Policy</p>
        </div>
        <div className="flex flex-col text-base text-[#e6e6e6] text-left align-baseline">
          <p className="font-kaushan text-sm mb-4">Top Destination</p>
          <p className="mb-3">Las Vegas</p>
          <p className="mb-3">New York City</p>
          <p className="mb-3">San Francisco</p>
          <p className="mb-3">Hawaii</p>
        </div>
        <div className="flex flex-col text-base text-[#e6e6e6] text-left align-baseline">
          <p className="mb-3">
            <br />
          </p>
          <p className="mb-3">Tokyo</p>
          <p className="mb-3">Sydney</p>
          <p className="mb-3">Melbourne</p>
          <p className="mb-3">Dubai</p>
        </div>
      </section>
      <section
        className="flex
      flex-col
      w-[20%]
      pl-[5%]
      items-start
      "
      >
        <div>
          <p className="font-kaushan text-sm mb-3">Sign up Newsletter</p>
        </div>
        <div
          className="flex
        flex-col
        items-start
        justify-between
        h-[30%]"
        >
          <div
            className="flex 
          flex-row 
          items-center
          justify-between
          bg-white
          rounded-lg
          min-w-10"
          >
            <LuSend
              style={{
                fontSize: "16px",
                color: "gray",
                verticalAlign: "middle",
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
              className="leading-8
              rounded-lg
              text-[#000]
              min-w-11
              border-none
              outline-none"
            />
          </div>
          <div className="flex mt-[10%] w-[40%]">
            <input
              type="button"
              value="Submit"
              className="bg-[#fc5056]
            text-[#e6e6e6]
            rounded-lg
            w-[100%]
            cursor-pointer
            leading-8
            hover:bg-[#a91101]"
            />
          </div>
          <div className="mt-[10%]">
            <p>2023 Trisog All Rights Reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
