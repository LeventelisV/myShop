import { useState, useContext } from "react";
import Context from "../Context"

export default function CategorySearch() {
    const { categories, setCategory } = useContext(Context)

    const categoryChanged = (event) => {setCategory(event.target.value)}
    return (

        <select name="categories" className=" border-none " onChange={categoryChanged} >
            <option className="ml-2" value={'-1'} >Categories</option>
            {categories.map((category) => {
                return <option className="ml-2" key={category} value={category}>{category}</option>
            })}
        </select>

    )
}