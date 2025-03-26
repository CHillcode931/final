import { useEffect, useState } from "react";
import { getProductList } from "./utils/api";
import './App.css'
export const    Home= () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductList().then((data) => {
            setProductList(data)
        })
    }, []);

  return (
    <div  style={{display: 'flex', flexWrap: 'wrap'}}>
        {productList.map((item) =>(
            <div className="card"  key={item.id}>
                <img src={item.image} alt="" height={300} />
                <div>{item.title}</div>
                <p>{item.description}</p>
                <div>${item.price}</div>
            </div>
    ))}
    </div>
  )
}

