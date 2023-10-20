import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const AllProducts = () => {
    const allProduct = useLoaderData()
    console.log(allProduct);
    return (
        <div className="grid p-2 grid-col-1 md:grid-cols-2 gap-5 md:w-11/12 md:mx-auto">
            {
                allProduct.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default AllProducts;