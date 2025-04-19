import { useContext } from "react";
import { WishListContext } from "../context/WishList";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
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
  {isItemInList ? (
    <>
      <FaHeart /> Remove from Wishlist
    </>
  ) : (
    <>
      <CiHeart /> Add to Wishlist
    </>
  )}
</button>
  );
};