import { useState, useRef } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const formRef = useRef(); 

    const handleSelectChange = (e) => {
        setSelectedBrand(e.target.value);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = formRef.current;
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
        fetch("https://technology-and-electronics-backend.vercel.app/product", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Product Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });

                    // Reset the form using the formRef
                    form.reset();
                    setSelectedBrand('');
                }
            })
    };

    return (
        <div>
            <h1 className='text-center text-3xl my-4 font-semibold text-red-500'>Add New Product</h1>
            <form ref={formRef} className="grid grid-cols-2 w-11/12 mx-auto gap-4 my-5" onSubmit={handleAddProduct}>
                <input name="photo" type="text" placeholder="Product Image URL" className="input input-bordered w-full max-w-xs" required />
                <input name="product" type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" required />
                <select className="select w-full max-w-xs" onChange={handleSelectChange} required>
                    <option value="">Select your Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Google">Google</option>
                    <option value="Intel">Intel</option>
                    <option value="MI">MI</option>
                </select>
                <input name="price" type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" required />
                <textarea name="short" className="textarea textarea-bordered col-auto" placeholder="Short description" required></textarea>
                <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" required />
                <input type="submit" className="btn btn-primary" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
