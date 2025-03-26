// creating function for api for the product list
export const getProductList=async ()=>{
    try{
        const response = await 
        fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        console.log(data)
        return data;
    }catch (error){
        console.error(error)
    }
}