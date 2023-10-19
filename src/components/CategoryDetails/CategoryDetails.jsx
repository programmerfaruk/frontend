import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const singleCategory = useLoaderData()
    console.log(singleCategory);
    return (
        <div>
            
        </div>
    );
};

export default CategoryDetails;