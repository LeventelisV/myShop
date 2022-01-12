import { useState, useContext } from "react";
import Context from "../Context"

export default function CategorySearch() {
    const { categories } = useContext(Context)

    return (
        
            <select name="categories" >
                <option className="ml-2" value={-1} >Categories</option>
                {categories.map((category) => {
                    return <option className="ml-2" key={category} value={category}>{category}</option>
                })}
            </select>
    
    )
}