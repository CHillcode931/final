import { getDetails } from "./utils/api";

import { useState, useEffect } from "react";
import{useParams} from "react-router-dom"

export const Details=()=>{
    const[productDetails,setProductDetails]=useState([])
    const { id } = useParams();

    useEffect(()=>{
        getDetails(id).then((data)=>{
console.log(data)
            setProductDetails(data)
        console.log(productDetails)
        })
    },[]);

return(
    <>
<div>
{productDetails.title}
</div>
    </>
)
}