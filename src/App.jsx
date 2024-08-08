import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar";
import HomePage from "./components/pages/home-page";
import CartPage from "./components/pages/cart-page";

export default function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}
