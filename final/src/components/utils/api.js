// creating function for api for the product list
export const getProductList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getDetails = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
