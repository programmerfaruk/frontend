import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BrandDetails = () => {
  const { brandName } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API for the selected brand
    fetch('https://technology-and-electronics-backend.vercel.app/product')
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.brand === brandName);
        setBrandProducts(filteredProducts);
      })
      .catch((error) => console.error(error));
  }, [brandName]);

  

  return (
    <div>
      <h1 className='text-2xl text-center font-semibold text-red-500'>Product Show For Brand: {brandName}</h1>
      {brandProducts.length === 0 ? (
        <p>No products available for this brand.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {brandProducts.map((product) => (
            <div key={product._id} className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.photo}
                  className="w-[250px] p-4"
                  alt={product.product}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.product}</h2>
                <div className="badge badge-secondary">
                  <span>Brand: </span> {product.brand}
                </div>
                <p>Price: ${product.price}</p>
                <div className="card-actions justify-between">
                  <Link to={`/productDetails/${product._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                  <Link to={`/updateProduct/${product._id}`}>
                    <button className="btn btn-primary">Update Product</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
