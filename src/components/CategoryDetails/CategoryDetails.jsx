import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const CategoryDetails = () => {
    const singleCategory = useLoaderData()
    // console.log(singleCategory.products);
    return (
        <div className="grid grid-cols-2 gap-4 w-11/12 mx-auto">
            {
                singleCategory.products.map((product, idx) => <Products key={idx} product={product}></Products>)
            }
            <p>slider </p>
        </div>
    );
};

export default CategoryDetails;