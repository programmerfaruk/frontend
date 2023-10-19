import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const singleCategory = useLoaderData()
    console.log(singleCategory);
    return (
        <div>
            <p>slider </p>
            <p>Image </p>
            <p> Name</p>
            <p> Band Name</p>
            <p>Type </p>
            <p> Price</p>
            <p>Rating </p>
            <p>Details button</p>
            <p>Update button </p>

        </div>
    );
};

export default CategoryDetails;