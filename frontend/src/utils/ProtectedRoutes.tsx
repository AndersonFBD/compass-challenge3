import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/authContext/userContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(UserContext);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
