import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar";
import HomePage from "./components/pages/home-page";
import CartPage from "./components/pages/cart-page";
import ProductPage from "./components/pages/product-page";
import CheckoutPage from "./components/pages/checkout-page";

export default function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}
