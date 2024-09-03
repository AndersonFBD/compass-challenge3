import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import TourDetails from "./pages/tourDetails/TourDetails";
import Login from "./pages/login/Login";
import { UserProvider } from "./contexts/authContext/userContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import NewAccount from "./pages/newAccount/NewAccount";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/tours/:id" element={<TourDetails />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
