import { useContext } from "react";
import { GlobalContext } from "../global-state";
import { Link } from "react-router-dom";

export default function Product({ item }) {
  const { cart, addItemToCart, reduceItemFromCart } = useContext(GlobalContext);
  const index = cart.findIndex((items) => items.id === item.id);

  return (
    <div className="product-item-container">
      <Link className="item-link" to={`/product-page/${item.id}`}>
        <div className="item-title">{item?.title}</div>
        <img className="item-image" src={item?.image} />
        <div className="item-price">${item?.price}</div>
      </Link>

      <div className="button-group1">
        <button className="button1" onClick={() => addItemToCart(item)}>
          +
        </button>
        <div className="item-quantity">{cart[index]?.quantity || 0}</div>
        <button className="button2" onClick={() => reduceItemFromCart(item)}>
          -
        </button>
      </div>

      {cart[index]?.quantity > 0 ? (
        <div className="item-subtotal">
          ${(cart[index]?.quantity * item.price).toFixed(2)}
        </div>
      ) : null}
    </div>
  );
}
