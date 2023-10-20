import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        // Fetch brand data from your API
        fetch('http://localhost:5001/product')
            .then((response) => response.json())
            .then((data) => {
                // Extract unique brand names from the data
                const uniqueBrands = [...new Set(data.map((product) => product.brand))];
                setBrands(uniqueBrands);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {brands.map((brand) => (
                <div key={brand} className="border p-4">
                    <h2 className="text-lg font-semibold mb-2">{brand}</h2>
                    <Link to={`/brands/${brand}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Brand Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BrandList;
