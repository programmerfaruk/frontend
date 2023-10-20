/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Products = ({product}) => {
    console.log(product);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={product.photo} className="w-[250px] p-4" alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.product}</h2>
                <div  className="badge badge-secondary"><span>Brand: </span> {product.brand}</div>
                <p>Price: {product.price}</p>
                <div className="card-actions justify-end">
                    <Link  to={`/productDetails/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                    <Link to={`/updateProduct/${product._id}`}><button className="btn btn-primary">Update Product</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;