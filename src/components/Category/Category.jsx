/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    // const singleCategory = useLoaderData()
    // console.log(singleCategory);
    return (
        <div className="card glass shadow-lg">
            <figure><img src={category.category_img} className="w-[160px] p-6" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category.category}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/categoriesDetails/${category._id}`}><button className="btn btn-primary">Category Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;