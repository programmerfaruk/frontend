import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const singleProduct = useLoaderData()
    console.log(singleProduct);
    return (
        <div className="w-10/12 mx-auto text-left font-semibold text-2xl">
            <h1 className="text-3xl text-blue-600">Product Info:</h1>
            <img src={singleProduct.photo} className="block mx-auto w-[350px]" alt="" />
            <h2 className="text-orange-500">Product Name: {singleProduct.product}</h2>
            <h3>Short Description: {singleProduct.short}</h3>
            <p>Price: ${singleProduct.price}</p>
            <p>Rating:{singleProduct.rating}</p>
        </div>
    );
};

export default ProductDetails;