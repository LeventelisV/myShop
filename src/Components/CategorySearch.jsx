import { useState } from "react";

export default function CategorySearch({ products }) {
    let initialCategories = [];
    const [categories, setCategories] = useState(initialCategories)

    products.map((product) => {
        initialCategories.indexOf(product.category) === -1 ? initialCategories.push(product.category) : console.log('already exists')
    })
    console.log('initialCategories',initialCategories);
    //  setCategories(initialCategories);

    // const [dropDownFilter, setDropDownFilter] = useState(initialCategories[0])
    
  
    // const dropDownFilterChanged = ($event) => {
    //     setDropDownFilter($event.target.value)
    // }

    return (
        <select name="categories" >
            <option className="ml-2" value={-1} >Products</option>
            {initialCategories.map((category) => {
                return <option className="ml-2" key={category} value={category}>{category}</option>
            })}
        </select>
    )
}