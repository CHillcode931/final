import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/Cart.jsx";
import { SearchProvider } from "./context/Search.jsx";
import { WishListProvider } from "./context/WishList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <WishListProvider>
    <CartProvider>
      <SearchProvider>
          <App />
      </SearchProvider>
    </CartProvider>
        </WishListProvider>
  </StrictMode>
);
