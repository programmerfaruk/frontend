import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5001/categorys")
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            Total Categories: {categories?.length}
            <div className="grid grid-col-1 md:grid-cols-3 w-11/12 mx-auto gap-5 shadow-lg my-5 p-4" >
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;