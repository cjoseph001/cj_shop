import { useContext } from "react";
import { GlobalContext } from "../../global-state";
import { useNavigate } from "react-router-dom";
import Cart from "../../cart";
export default function CartPage() {
  const { cart, calculateTotalPrice, calculateTotalQuantity, clearCart } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 className="cart-page-title">My Cart</h2>
      <div className="cart-tile">
        {cart && cart.length > 0
          ? cart.map((item) => <Cart key={item.id} item={item} />)
          : null}
      </div>
      {cart && cart.length > 0 ? (
        <div className="total-quantity-price">
          <h2>Total Quantity: {calculateTotalQuantity(cart)}</h2>
          <h2>Total Price: ${calculateTotalPrice(cart).toFixed(2)}</h2>
          <button className="clear-cart-button" onClick={clearCart}>
            Clear Cart
          </button>
          <button
            className="home-button"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="home-button"
            onClick={() => navigate("/checkout-page")}
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="no-items">
          <h1>No Items in Cart.</h1>
          <button className="start-shopping-button" onClick={handleShop}>
            Start Shopping!
          </button>
        </div>
      )}
    </div>
  );
}
