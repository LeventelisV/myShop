import React from 'react'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import ShoppingCard from "./Components/ShoppingCard"
import Checkout from './Components/Checkout';
import Context from './Context';

export default function Products() {
    const [products, setProducts] = useState([]);  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(localStorage.getItem('localStorageProducts') ? JSON.parse(localStorage.getItem('localStorageProducts')) : [])
    const [category, setCategory] = useState('-1')
    const [tax, setTax] = useState(0)
    const [shipping, setShippping] = useState(30)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products');

                let initialCategories = response.data.map(product => product.category);
                initialCategories = new Set(initialCategories);
                setCategories([...initialCategories]);
                setProducts(response.data);
                setError(null);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, []);

    return (
        <Context.Provider
            value={{
                selectedProducts,
                setSelectedProducts,
                categories,
                category,
                setCategory,
                loading,
                error,
                products, 
                tax, 
                setTax, 
                shipping, 
                setShippping
            }}>
            <Router>
                <Routes>
                    <Route path="/myShop" element={<ShoppingCard />} />
                    <Route path="/myShop/buy" element={<Checkout />} />
                </Routes>
            </Router>
        </Context.Provider>
    )




}