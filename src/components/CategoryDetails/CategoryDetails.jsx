import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const CategoryDetails = () => {
    const singleCategory = useLoaderData()
    // console.log(singleCategory.products);
    return (
        <div>
            {
                singleCategory.products.map((product, idx) => <Products key={idx} product={product}></Products>)
            }
            <p>slider </p>
        </div>
    );
};

export default CategoryDetails;