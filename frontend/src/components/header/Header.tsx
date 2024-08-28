import { Link, NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
  FaPinterestP,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const isloggedIn = false;
  return (
    <div className="flex flex-col justify-stretch mx-auto min-w-[100%] min-h-20 bg-[#f3f3f5] items-center">
      <div className="flex flex-row w-full h-4 justify-between my-2">
        <div className="flex mx-3 text-xs text-gray-800">
          <div className="flex px-6 border-gray-400 border-r-2 ">
            <p>(000)999-898-999</p>
          </div>
          <div className="flex px-8">
            <p>info@trisog.com</p>
          </div>
        </div>
        <div className="flex mx-3 w-56 text-xs text-gray-800">
          <div className="flex justify-evenly w-28 border-r-2 border-gray-300">
            <Link to="https://www.twitter.com">
              <FaTwitter />
            </Link>
            <Link to="https://www.linkedin.com">
              <FaLinkedinIn />
            </Link>
            <Link to="https://www.google.com">
              <FaGoogle />
            </Link>
            <Link to="https://www.pinterest.com">
              <FaPinterestP />
            </Link>
          </div>
          <div className="flex text-xs">
            <select
              name="currency"
              id="currency"
              className="flex mx-2 bg-transparent text-[0.7rem]"
            >
              <option value="euro">EUR</option>
              <option value="us dollar">USD</option>
            </select>
          </div>
        </div>
      </div>
      <nav className="flex flex-row bg-white w-full h-[72px] items-center justify-between">
        <div className="flex flex-row mx-8 w-[50vw] justify-between text-lg align-middle">
          <div className="flex flex-row mx-1">
            <img
              src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/Logo+Black.png"
              alt="trisog logo"
              className="h-[32px]"
            />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            Tours
          </NavLink>
          <NavLink
            to="/Destination"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            Destination
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/Pages"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            Pages
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-[#FC5056]" : "hover:text-red-600"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex text-lg items-center mx-8 w-auto">
          <div className="flex w-64 justify-between">
            <input type="text" className="rounded-xl" />
            <button className="hover:text-[#FC5056] align-middle">
              <IoSearch size={24} />
            </button>
          </div>
          <div className="flex flex-row mx-8 align-middle">
            <button className="w-auto flex text-lg items-center justify-between hover:text-[#FC5056]">
              <AiOutlineUser size={24} />
              <span>{isloggedIn ? "Logout" : "Login/Signup"}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
