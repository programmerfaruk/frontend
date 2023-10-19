import { Link, useLoaderData } from "react-router-dom";

const Category = ({category}) => {
    const singleCategory = useLoaderData()
    console.log(singleCategory);
    return (
        <div className="card glass">
            <figure><img src={category.category_img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category.category}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    {/* <Link to={singleCategory.id}><button className="btn btn-primary">Learn now!</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Category;