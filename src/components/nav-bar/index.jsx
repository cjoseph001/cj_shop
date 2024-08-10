import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../global-state";

export default function Navbar() {
  const { cart, calculateTotalQuantity, calculateTotalPrice } =
    useContext(GlobalContext);
  return (
    <div className="header">
      <div className="header-title">CJ Shop</div>

      <div className="navbar">
        <ul>
          <Link className="nav" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav" to="/cart-page">
            <li>
              {" "}
              Cart
              {calculateTotalQuantity(cart) > 0
                ? ` (${calculateTotalQuantity(cart)}) : $${calculateTotalPrice(
                    cart
                  ).toFixed(2)}`
                : null}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
