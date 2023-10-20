/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Products = ({product}) => {
    console.log(product);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div  className="badge badge-secondary"><span>Brand: </span> {product.brand}</div>
                <p>Price: {product.price}</p>
                <div className="card-actions justify-end">
                    <Link  to={`/productDetails/${product.name}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-primary">Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default Products;