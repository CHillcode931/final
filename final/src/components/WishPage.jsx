import { useContext } from "react";
import { WishListContext } from "../context/WishList";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export const WishList = () => {
  const { wishItems, removeFromWishList, clearWishList } =
    useContext(WishListContext);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => clearWishList()}>Clear List</button>
        <h1>Wish List</h1>
        {wishItems.length === 0 && <p>Please Add Items To Your Wish List</p>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {wishItems.map((item) => (
          <div key={item.id} className="card">
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} height={100} />
            <p>
              {item.rating.rate} <AiFillStar />
            </p>
            <p>
              <strong>Sales : </strong>
              {item.rating.count}
            </p>
            <p>${item.price}</p>
            <button onClick={() => removeFromWishList(item)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};
