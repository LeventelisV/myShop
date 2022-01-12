import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import ShoppingCard from "./Components/ShoppingCard"

export default function Products(props) {
    const [data, setData] = useState([]);   // { data: [], categories: [] }
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    console.log('products()')
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products');

                let initialCategories = response.data.map(product => product.category);
                initialCategories = new Set(initialCategories);
                setCategories([...initialCategories]);
                // setData({ data: response.data, categories: initialCategories })
                setData(response.data);
                // to data den einai dia8esimo edw!!!!
                setError(null);

            }
            catch (err) {
                setError(err.message);
                // setData(null);

            }
            finally {
                setLoading(false)
            }
        }
        getData()

    }, []);

    return (
        <>
            <ShoppingCard products={data} error={error} loading={loading} categories={categories} />
        </>
    )




}