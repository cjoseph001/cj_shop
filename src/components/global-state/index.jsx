import { createContext, useState } from "react";
import { useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (data) {
      setLoading(false);
      setData(data);
      setFilteredData(data);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchItem) => {
    const filteredResults = data.filter((dataItem) =>
      dataItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredData(filteredResults);
    setIsSearching(true);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setFilteredData(data);
    setIsSearching(false);
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const currentIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (currentIndex > -1) {
        const updatedCart = prevCart.map((cartItem, index) =>
          index === currentIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        console.log(updatedCart);
        return updatedCart;
      } else {
        const newCart = [...prevCart, { ...item, quantity: 1 }];
        console.log(newCart);
        return newCart;
      }
    });
  };

  const reduceItemFromCart = (item) => {
    console.log(item);
    setCart((prevCart) => {
      const currentIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (currentIndex == -1) {
        console.log("empty", prevCart);
        return prevCart;
      } else if (prevCart[currentIndex].quantity == 1) {
        const updatedCart = prevCart.filter(
          (_, index) => index !== currentIndex
        );
        console.log("Updated cart after removal", updatedCart);
        return updatedCart;
      } else {
        const updatedCart = prevCart.map((cartItem, index) =>
          index === currentIndex
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        console.log(updatedCart);
        return updatedCart;
      }
    });
  };

  const removeItemFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalQuantity = (allItems) => {
    const quantities = allItems.map((item) => item.quantity);
    const totalQuantity = quantities.reduce((total, value) => total + value, 0);
    return totalQuantity;
  };

  const calculateTotalPrice = (allItems) => {
    const price = allItems.map((item) => item.quantity * item.price);
    const totalPrice = price.reduce((total, value) => total + value, 0);
    return totalPrice;
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        data,
        filteredData,
        setFilteredData,
        searchQuery,
        setSearchQuery,
        handleSearch,
        loading,
        isSearching,
        resetSearch,
        addItemToCart,
        reduceItemFromCart,
        removeItemFromCart,
        clearCart,
        calculateTotalQuantity,
        calculateTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
