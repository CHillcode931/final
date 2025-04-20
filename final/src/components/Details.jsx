
import { getDetails } from "./utils/api";
import { FaCartPlus } from "react-icons/fa";
import { WishListToggleButton } from "./ToggleButton";
import { CartContext } from "../context/Cart.jsx";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";

export const Details = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeFromCart, addToCart } = useContext(CartContext);

  useEffect(() => {
    getDetails(id).then((data) => {
      setProductDetails(data);
    });
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <em>Back</em>
      </button>

      <div>
        <p>{productDetails.category || "No category available"}</p>
        <h2>{productDetails.title || "No title available"}</h2>
        <p>
          <img
            src={productDetails.image}
            alt={productDetails.title || "Product image"}
            style={{ maxWidth: "300px" }}
          />
        </p>
        <p>${productDetails.price || "Price not available"}</p>
        <p>{productDetails.description || "No description available"}</p>
        <p>
          <b>Rating: </b>
          {productDetails.rating?.rate || "No rating"}
        </p>
        <p>
          <b>Product Sales: </b>
          {productDetails.rating?.count || "Sales info unknown"}
        </p>
      </div>

      <div>
        <button onClick={() => addToCart({item:productDetails})}>
          <FaCartPlus /> Add to Cart
        </button>

        <WishListToggleButton item={productDetails} />

        <button onClick={() => removeFromCart({item:productDetails})}>
          <MdRemoveShoppingCart /> Remove from Cart
        </button>
      </div>
    </>
  );
};