import React from 'react'
import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import ShoppingCard from "./Components/ShoppingCard"
import Checkout from './Components/Checkout';
import Context from './Context';
import useFetch from "./CustomHooks/useFetch"

export default function Products() {
    const [selectedProducts, setSelectedProducts] = useState(localStorage.getItem('localStorageProducts') ? JSON.parse(localStorage.getItem('localStorageProducts')) : [])
    const [category, setCategory] = useState('-1')
    const [tax, setTax] = useState(0)
    const [shipping, setShippping] = useState(30)
    const {products,error,loading,categories} = useFetch()

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
                    <Route path="/" element={<ShoppingCard />} />
                    <Route path="/buy" element={<Checkout />} />
                </Routes>
            </Router>
        </Context.Provider>
    )




}