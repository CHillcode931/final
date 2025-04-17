import { useEffect, useState, useContext } from "react";
import { getProductList } from "./utils/api";
import "./App.css";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart.jsx";
import{SearchContext} from "../context/Search.jsx"


export const Home = () => {
  
  const{searchQuery}=useContext(SearchContext)
  const [items, setItems] = useState([]); // State to store fetched items
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProductList().then((data) => {
      setItems(data); // Store fetched items in state
    });
  }, []);
 

       const filteredItems=items.filter((item)=>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())&&(selectedCategory==="All"||item.category===selectedCategory));
  return (
    <>
      <div>
        <p>Sort by category:</p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothng</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredItems.map((item) => (
          // <Link to={`details/${item.id}`} key={item.id}>
            <div className="card" key ={item.id}>
              <img src={item.image} alt={item.title} height={300} /> 
              
              
              <Link to={`details/${item.id}`}><h3>{item.title}</h3></Link>
              
              <p>Rating: {item.rating?.rate || "No rating"}</p>
              <div>${item.price}</div>
              <div>
                <button onClick={()=>addToWishList({item})}>
                  <CiHeart />
                </button>
                <button onClick={() => addToCart({item})}>
                  <FaCartPlus />
                </button>
              </div>
            </div>
          //  </Link>
        ))}
      </div>
    </>
  );
};