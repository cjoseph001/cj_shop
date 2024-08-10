import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../global-state";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, addItemToCart, reduceItemFromCart, cart } =
    useContext(GlobalContext);

  const productItem = data.find((item) => item.id === id);
  const cartId = cart.findIndex((item) => item.id === id);

  return (
    <div className="product-item-container">
      <div className="item-title">{productItem?.title}</div>
      <img className="item-image" src={productItem?.image} />
      <div className="item-price">${productItem?.price}</div>

      <div className="item-price">${productItem?.description}</div>

      <div className="button-group1">
        <button className="button1" onClick={() => addItemToCart(productItem)}>
          +
        </button>
        <div className="item-quantity">{cart[cartId]?.quantity || 0}</div>
        <button
          className="button2"
          onClick={() => reduceItemFromCart(productItem)}
        >
          -
        </button>
      </div>

      {cart[index]?.quantity > 0 ? (
        <div className="item-subtotal">
          ${(cart[cartId]?.quantity * productItem.price).toFixed(2)}
        </div>
      ) : null}

      <button className="close-button" onClick={() => navigate("/")}>
        Close
      </button>
    </div>
  );
}
