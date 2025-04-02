import { useEffect, useState } from "react";
import { getProductList } from "./utils/api";
import './App.css'
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";


export const    Home= () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductList().then((data) => {
            setProductList(data)
        })
    }, []);
 
  return (
    <div  style={{display: 'flex', flexWrap: 'wrap',}}>
        {productList.map((item) =>(
          <Link to={`details/${item.id}`}key={item.id}>  <div className="card" >
                <img src={item.image} alt="" height={300} />
                <div>{item.title}</div>
                <p>{item.rating.rate}</p>
                <div>${item.price}</div>
            <div><button> <CiHeart/></button>
            <button><FaCartPlus/></button></div>
            </div></Link>
    ))}
    </div>
  )
}

