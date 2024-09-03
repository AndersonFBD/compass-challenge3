import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const NewAccount = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSignUp(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.replace("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  return (
    <div
      className="flex h-[100vh] w-[100vw] items-center justify-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/night-travel.webp)",
        objectFit: "contain",
      }}
    >
      <form
        className="font-work text-center flex w-[25vw] min-h-[60vh]
      flex-col flex-wrap text-black bg-white justify-evenly rounded-2xl shadow-sm px-[3%]"
      >
        <div className="flex flex-row my-4 justify-center">
          <img
            src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/Logo+Black.png"
            alt="trisog logo"
            className="h-[64px]"
          />
        </div>
        <div className="flex flex-col items-center mx-[5%] justify-center ">
          <p className="font-work text-lg font-medium">
            Register a new account.
          </p>
        </div>
        <div
          id="email-field"
          className="flex flex-col items-start justify-center h-[10vh]"
        >
          <label htmlFor="email" className="mb-5">
            Email
          </label>
          <input
            className="w-full py-[2%] text-base border border-[#a9afbb]"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div
          id="password-field"
          className="flex flex-col items-start justify-center h-[10vh]"
        >
          <label htmlFor="password" className="mb-5">
            Password
          </label>
          <input
            className="w-full py-[2%] text-base border border-[#a9afbb]"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-red-700 text-white font-work 
            py-[3%] border-none w-full cursor-pointer  hover:bg-[#2917b1] hover:text-green-300"
          >
            CREATE ACCOUNT
          </button>
        </div>
        <div className="flex justify-start text-left">
          <p>
            already have an account?{" "}
            <Link
              to={"/login"}
              className="no-underline font-kaushan text-red-700 font-semibold"
            >
              SIGN IN
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewAccount;
