import React, { useContext, useState } from "react";
import { CartContext } from "../context/Cart";

export const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    state:""
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleOrderConfirmation = () => {
    alert("Order Confirmed! Thank you for your purchase.");
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>

      <section>
        <h2>Cart Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
              </div>
            ))}
            <h3>Total: ${getCartTotal()}</h3>
          </div>
        )}
      </section>

      <section>
        <h2>Shipping Information</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleInputChange}
          />
          <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={handleInputChange}/>
          
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
          />
        </form>
      </section>

      <section>
        <h2>Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </section>

      <button onClick={handleOrderConfirmation}>Confirm Order</button>
    </div>
  );
};