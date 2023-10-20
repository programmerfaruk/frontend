import { useLoaderData } from "react-router-dom";

const ProductDetails = ({product}) => {
    console.log(product);
    return (
        <div>
            product Details {product?.name}
        </div>
    );
};

export default ProductDetails;