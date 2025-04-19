import { createContext, useState, useEffect } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishItems")) || [];
    } catch (error) {
      console.error("Failed to parse local storage data:", error);
      return [];
    }
  });

  const addToWishList = (item) => {
    const isItemInList = wishItems.some((wishItem) => wishItem.id === item.id);
    if (!isItemInList) {
      setWishItems([...wishItems, item]);
    }
  };

  const removeFromWishList = (item) => {
    setWishItems(wishItems.filter((wishItem) => wishItem.id !== item.id));
  };
const clearWishList=()=>{
    setWishItems([])
};
  useEffect(() => {
    try {
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
    } catch (error) {
      console.error("Failed to update local storage:", error);
    }
  }, [wishItems]);

  return (
    <WishListContext.Provider
      value={{
        wishItems,
        addToWishList,
        removeFromWishList,
        clearWishList
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};