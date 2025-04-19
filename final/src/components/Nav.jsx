import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/Search";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


export const Nav=()=>{
const{searchQuery, setSearchQuery}=useContext(SearchContext)
return(
<>
<div id="nav">
    <div className="topnav" >
  <Link   to="/"><FaHome/></Link>
  <Link to="about"><FcAbout/></Link>
  <Link to="contact"><FaPhoneAlt/></Link>
 <Link to='cart'><FaCartShopping/></Link>
  <Link to="CheckOut"><FaCartArrowDown />
  </Link>
  <Link to="WishList"><CiHeart/></Link>
 <input type="text" 
 placeholder="Search.."
 value={searchQuery}
 onChange={(event)=> setSearchQuery(event.target.value)}/>
 
 <h1>Far Out Products</h1>
</div>
</div>
</>
)

}
