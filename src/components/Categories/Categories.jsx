import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://technology-and-electronics-backend.vercel.app/categorys")
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            Total Categories: {categories?.length}
            <div className="grid grid-col-1 md:grid-cols-3 w-11/12 mx-auto gap-5 my-5 p-4" >
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;