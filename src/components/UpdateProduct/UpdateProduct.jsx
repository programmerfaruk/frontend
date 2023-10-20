import { useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const [selectedBrand, setSelectedBrand] = useState(''); // Set the default brand
  const formRef = useRef();
  const reqUpdate = useLoaderData();

  const handleSelectChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const photo = form.photo.value;
    const product = form.product.value;
    const price = form.price.value;
    const short = form.short.value;
    const rating = form.rating.value;

    const updateProduct = {
      photo,
      product,
      price,
      short,
      rating,
      brand: selectedBrand,
    };

    console.log(updateProduct);
    fetch(`https://technology-and-electronics-backend.vercel.app/product/${reqUpdate._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Successfully Update',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          // Reset the form using the formRef
          form.reset();
          setSelectedBrand(''); // Reset the selected brand to the default
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-4 font-semibold text-red-500">
        Update Product: {reqUpdate.product}
      </h1>
      <form
        ref={formRef}
        className="grid grid-cols-2 w-11/12 mx-auto gap-4 my-5"
        onSubmit={handleUpdateProduct}
      >
        <input
          name="photo"
          defaultValue={reqUpdate.photo}
          type="text"
          placeholder="Product Image URL"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="product"
          defaultValue={reqUpdate.product}
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full max-w-xs"
        />
        <select
          value={selectedBrand} // Set the default value for the select element
          required
          className="select w-full max-w-xs"
          onChange={handleSelectChange}
        >
          <option value="">Select your Brand</option> {/* No brand selected by default */}
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
          <option value="Google">Google</option>
          <option value="Intel">Intel</option>
          <option value="MI">MI</option>
        </select>
        <input
          name="price"
          type="number"
          defaultValue={reqUpdate.price}
          placeholder="Price"
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          name="short"
          defaultValue={reqUpdate.short}
          className="textarea textarea-bordered col-auto"
          placeholder="Short description"
        ></textarea>
        <input
          name="rating"
          defaultValue={reqUpdate.rating}
          type="number"
          placeholder="Rating"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
