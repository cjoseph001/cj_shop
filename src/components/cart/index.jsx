import { useContext, useState } from "react";
import { GlobalContext } from "../global-state";

export default function Cart({ item }) {
  const {
    cart,
    addItemToCart,
    removeItemFromCart,
    setCart,
    reduceItemFromCart,
  } = useContext(GlobalContext);
  const index = cart.findIndex((items) => items.id === item.id);
  const [count, setCount] = useState("");

  const handleQuantityChange = (item, count, setCount) => {
    setCart((prevCart) => {
      const currentIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (currentIndex > -1) {
        if (count > 0) {
          const updatedCart = prevCart.map((cartItem, index) =>
            index === currentIndex
              ? { ...cartItem, quantity: Number(count) }
              : cartItem
          );
          console.log(updatedCart);
          return updatedCart;
        } else if (count == 0) {
          const removed = prevCart.filter(
            (cartItem) => cartItem.id !== item.id
          );
          console.log(removed, "removed");
          return removed;
        }
      } else {
        if (count > 0) {
          const newCart = [...prevCart, { ...item, quantity: Number(count) }];
          console.log(newCart);
          return newCart;
        } else if (count == 0) {
          console.log(prevCart);
          return prevCart;
        }
      }
    });
    setCount("");
  };

  const isButtonDisabled =
    count.trim() === "" || isNaN(count) || Number(count) < 0;

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-container">
        <div className="item-title">{item?.title}</div>

        <img className="item-image" src={item?.image} />

        <div className="item-price">${item?.price}</div>

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
            Subtotal: ${(cart[index]?.quantity * item.price).toFixed(2)}
          </div>
        ) : null}

        <div className="change">
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            min="1"
            placeholder="Change quantity"
          />
          <button
            className="change-button"
            disabled={isButtonDisabled}
            onClick={() => handleQuantityChange(item, count, setCount)}
          >
            Enter
          </button>
          <div className="item-warning">
            {count < 0 ? <div>Please enter the correct quantity</div> : null}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          removeItemFromCart(item);
        }}
        className="remove"
      >
        X
      </button>
    </div>
  );
}
