import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const AllProducts = () => {
    const allProduct = useLoaderData()
    console.log(allProduct);
    return (
        <div className="grid grid-col-1 md:grid-cols-2 gap-5 w-11/12 mx-auto">
            {
                allProduct.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default AllProducts;