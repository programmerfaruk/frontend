import { useState } from 'react';

const AddProduct = () => {
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleSelectChange = (e) => {
        setSelectedBrand(e.target.value);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const product = form.product.value;
        const price = form.price.value;
        const short = form.short.value;
        const rating = form.rating.value;

        const newProduct = {
            photo,
            product,
            price,
            short,
            rating,
            brand: selectedBrand,
        };

        console.log(newProduct);
        fetch("http://localhost:5001/product", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(product => console.log(product))
    };

    return (
        <div>
            <form className="grid grid-cols-2 w-11/12 mx-auto gap-4 my-5" onSubmit={handleAddProduct}>
                <input name="photo" type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                <input name="product" type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <select className="select w-full max-w-xs" onChange={handleSelectChange}>
                    <option disabled selected>Select your Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Google">Google</option>
                    <option value="Intel">Intel</option>
                    <option value="MI">MI</option>
                </select>
                <input name="price" type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <textarea name="short" className="textarea textarea-bordered col-auto" placeholder="Short description"></textarea>
                <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                <input type="submit" className="btn btn-primary" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
