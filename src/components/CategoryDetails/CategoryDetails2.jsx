import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        // Fetch data from your API or database
        fetch('https://technology-and-electronics-backend.vercel.app/product')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                const uniqueBrands = [...new Set(data.map((product) => product.brand))];
                setBrands(uniqueBrands);
            })
            .catch((error) => console.error(error));
    }, []);

    const filteredProducts = selectedBrand
        ? products.filter((product) => product.brand === selectedBrand)
        : products; // Display all products if no brand is selected

    return (
        <div>
            <h1>Product List</h1>

            {/* Display the brand cards */}
            <div className="brand-cards">
                {brands.map((brand) => (
                    <div
                        key={brand}
                        className="brand-card glass shadow-lg"
                        onClick={() => setSelectedBrand(brand)}
                    >
                        {brand}
                    </div>
                ))}
            </div>

            {/* Display product details in a grid card layout */}
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="product-card glass shadow-lg">
                        <img src={product.photo} alt={product.product} className="product-image" />
                        <h2 className="product-title">{product.product}</h2>
                        <p className="product-price">Price: {product.price}</p>
                        <p className="product-description">{product.short}</p>
                        <p className="product-rating">Rating: {product.rating}</p>
                        <p className="product-brand">Brand: {product.brand}</p>
                        <Link to={`/products/productDetails/${product._id}`}>
                            <button className="product-button btn btn-primary">Learn more</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
