import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        // Fetch brand data from your API
        fetch('https://technology-and-electronics-backend.vercel.app/product')
            .then((response) => response.json())
            .then((data) => {
                // Extract unique brand names and their associated image URLs from the data
                const uniqueBrands = [...new Set(data.map((product) => product.brand))];
                const brandsWithImages = uniqueBrands.map((brand) => {
                    const brandData = data.find((product) => product.brand === brand);
                    return {
                        name: brand,
                        image: brandData.photo, // Assuming brand image URLs are in the 'photo' field
                    };
                });
                setBrands(brandsWithImages);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1 className='text-center text-2xl text-red-500 font-semibold'>Total Brands: {brands.length}</h1>
            <div className="grid grid-cols-1 p-3 md:grid-cols-3 gap-4">
                {brands.map((brand) => (
                    <div key={brand.name} className="border p-4">
                        <img src={brand.image} alt={brand.name} className="mb-2" style={{ width: '100px', height: '100px' }} />
                        <h2 className="text-lg font-semibold mb-2">{brand.name}</h2>
                        <Link to={`/brands/${brand.name}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Brand Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandList;
