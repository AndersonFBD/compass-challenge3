import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  FacebookAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../services/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignInGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider).then((result) => {
          const user = result.user;
          sessionStorage.setItem("mail", String(user.email));
        });
      })
      .then(() => {
        return window.location.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, credential);
      });
  };

  const handleSigninFacebook = () => {
    const provider = new FacebookAuthProvider();
    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        sessionStorage.setItem("mail", String(user.email));
        return window.location.replace("/");
      } catch (error) {
        const errorMessage = String(error.message);
        toast.error(`${errorMessage}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };

  function handleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password).then(() => {
          sessionStorage.setItem("mail", String(auth.currentUser?.email));
        });
      })
      .then(() => {
        return window.location.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        toast.error(`${errorCode}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  return (
    <div
      className="flex h-[100vh] w-[100vw] items-center justify-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/night-travel.webp)",
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <form
        className="
      flex flex-col font-work p-[2vh] 
      
      text-center w-[25vw] min-h-[60vh]
      flex-wrap text-black justify-evenly bg-white rounded-2xl shadow-sm"
      >
        <div className="flex w-full justify-center mt-[2vh]">
          <div className="flex flex-row m-1">
            <img
              src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/Logo+Black.png"
              alt="trisog logo"
              className="h-[64px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mx-[5%] justify-center h-[10vh]">
          <p className="font-work text-lg font-medium">
            Provide your email and password to login.
          </p>
        </div>
        <div
          id="email-field"
          className="flex flex-col items-start justify-center h-[10vh]"
        >
          <label htmlFor="email" className="pl-[5%] mb-[5px]">
            Email
          </label>
          <input
            className="w-[90%] mx-[5%] py-[2%] px-0 text-base border border-[#a9afbb]"
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
          <label htmlFor="password" className="pl-[5%] mb-[5px]">
            Password
          </label>
          <input
            className="w-[90%] mx-[5%] py-[2%] px-0 text-base border border-[#a9afbb]"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            onClick={handleSignIn}
            className="bg-[#FC5056] text-white 
          font-work border-none py-[3%] px-0 w-[90%] my-[2%] mx-[5%] cursor-pointer
          hover:bg-white hover:text-[#FC5056]"
          >
            SIGN IN
          </button>
        </div>
        <div className="flex flex-col w-full justify-center items-center my-[5%] mx-auto">
          <p>login with:</p>
          <div className="flex flex-row justify-evenly w-full">
            <button
              type="button"
              className="flex flex-row font-work 
              cursor-pointer  text-[12pt] font-medium rounded-2xl 
              justify-evenly items-center w-[44%] h-[5vh] m-[2%] 
              bg-transparent border-none bg-red-700 text-white
              hover:text-[#fc5056] hover:bg-[#2917b1]"
              onClick={handleSignInGoogle}
            >
              <FaGoogle /> <p>Google</p>
            </button>
            <button
              type="button"
              className="flex flex-row font-work 
              cursor-pointer  text-[12pt] font-medium rounded-2xl 
              justify-evenly items-center w-[44%] h-[5vh] m-[2%] 
              bg-transparent border-none bg-red-700 text-white
              hover:text-[#fc5056] hover:bg-[#2917b1]"
              onClick={handleSigninFacebook}
            >
              <ImFacebook2 /> <p>Facebook</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <p>
            don't have an account yet?{" "}
            <Link
              to={"/newAccount"}
              className="no-underline font-kaushan text-[#FC5056] font-semibold"
            >
              SIGN UP
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
