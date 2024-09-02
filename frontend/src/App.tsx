import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import TourDetails from "./pages/tourDetails/TourDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
