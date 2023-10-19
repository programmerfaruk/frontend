
const AddProduct = () => {
    return (
        <div>
            <form className="grid grid-cols-2 w-11/12 mx-auto gap-4 my-5">
                <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Product Type</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered col-auto" placeholder="Short description"></textarea>
                <input type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                <input type="submit" className="btn btn-primary" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;