import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar";
import HomePage from "./components/pages/home-page";
import CartPage from "./components/pages/cart-page";
<<<<<<< HEAD
=======
import ProductPage from "./components/pages/product-page";
>>>>>>> recovered-branch

export default function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
<<<<<<< HEAD
=======
        <Route path="/product-page/:id" element={<ProductPage />} />
>>>>>>> recovered-branch
      </Routes>
    </div>
  );
}
