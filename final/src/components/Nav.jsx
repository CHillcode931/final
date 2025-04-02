
import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";


export const Nav=()=>{
return(
<>
    <div className="topnav">
  <Link  className="active" to="/"><FaHome/></Link>
  {/* <Link to="about"><FcAbout/></Link> */}
  {/* <Link to="contact"><FaPhoneAlt/></Link> */}
 {/* <Link to="cart"><FaCartShopping/></Link> */}
  
  
 <input type="text" placeholder="Search.."></input>
</div>

</>
)

}
