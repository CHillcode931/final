import { useContext } from "react";
import { WishListContext } from "../context/WishList";

export const WishListToggleButton = ({ item }) => {
  const { wishItems, addToWishList, removeFromWishList } = useContext(WishListContext);

  const isItemInList = wishItems.some((wishItem) => wishItem.id === item.id);

  const toggleWishList = () => {
    if (isItemInList) {
      removeFromWishList(item);
    } else {
      addToWishList(item);
    }
  };

  return (
    <button onClick={toggleWishList}>
      {isItemInList ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};