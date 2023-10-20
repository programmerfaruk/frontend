import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BrandDetails = () => {
  const { brand } = useParams(); // Get the brand name from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API
    fetch('http://localhost:5001/product')
      .then((response) => response.json())
      .then((data) => {
        // Filter products by the selected brand
        const filteredProducts = data.filter((product) => product.brand === brand);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error(error));
  }, [brand]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products for {brand}</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4">
            <img src={product.photo} alt={product.product} className="w-full mb-2" />
            <h3 className="text-lg font-semibold">{product.product}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.short}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
