import { useEffect, useState, useContext } from "react";
import { getProductList } from "./utils/api";
import "./App.css";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart.jsx";
import { SearchContext } from "../context/Search.jsx";
import { WishListToggleButton } from "./ToggleButton.jsx";

export const Home = () => {
  const { searchQuery } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductList().then((data) => {
      setItems(data);
    });
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div id="sort-container">
        <div id="sorting">
          <p>
            <strong>Sort By Category:</strong>
          </p>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>

          <div id="price">
            <p>
              <strong>Sort by Price:</strong>
            </p>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">None</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={`Image of ${item.title}`} height={300} />
            <div>
              <Link to={`details/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
            </div>
            <p>Rating: {item.rating?.rate || "No rating"}</p>
            <div>${item.price}</div>
            <div>
              <WishListToggleButton item={item} />
              <button onClick={() => addToCart({ item })}>
                <FaCartPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
