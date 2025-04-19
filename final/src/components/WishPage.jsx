import { useContext } from "react";
import { WishListContext } from "../context/WishList";
import { Link } from "react-router-dom";


export const WishList=()=>{
    const{wishItems, addToWishList, removeFromWishList,clearWishList}=useContext(WishListContext)
    return(

        <>
        <div></div>
        </>
    )
}
