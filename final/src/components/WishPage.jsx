import { useContext } from "react";
import { WishListContext } from "../context/WishList";
import { Link } from "react-router-dom";

export const WishList = () => {
  const { wishItems, addToWishList, removeFromWishList, clearWishList } =
    useContext(WishListContext);
  return (
    <>
      <div>
        <Link to={-1}>Back</Link>
        <button onClick={()=>clearWishList()}></button>
        <h1>Wish List</h1>
        {wishItems.length ||
          (wishItems.length === 0 && <p>Please Add Items To Your Wish List</p>)}
      </div>
      {wishItems.map((item) => {
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.price}</p>
        </div>;
      })}
    </>
  );
};
