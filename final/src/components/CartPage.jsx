import { useContext } from "react";
import { CartContext } from "../context/Cart.jsx";
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="app.css" />;

export const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  return (
    <>
      <div>
        <div>
          <Link to={-1}>
            <button>
              <em>Back</em>
            </button>
          </Link>
        </div>
        <h1>Cart</h1>

        {cartItems.length ||
          (cartItems.length === 0 && (
            <p>Your cart is currently empty. Add some items to get started!</p>
          ))}
        {cartItems.map((item) => (
          <div key={item.id} className="card">
            <div>
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} height={100} />
              <p>${item.price}</p>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  removeFromCart({ item });
                }}
              >
                <MdRemoveShoppingCart />
              </button>

              <button
                onClick={() => {
                  addToCart({ item });
                }}
              >
                <FaCartPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          clearCart();
        }}
      >
        <IoTrashBin />
      </button>
      <p>total: ${getCartTotal()} </p>
    </>
  );
};
