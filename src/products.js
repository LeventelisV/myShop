import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import ShoppingCard from "./Components/ShoppingCard"

export default function ProductList(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products');             
                setData(response.data);
                // to data den einai dia8esimo edw!!!!
                setError(null);   
                
            }
            catch (err) {
                setError(err.message);
                setData(null)
            }
            finally {
                setLoading(false)
                
            }
        }
        getData()
         
    }, []);
    // if i want to skip the first render I  use a condition and return nothing at the first time
    // useEffect(()=>{
    //     console.log('data changed', data)
    // },[data])
    //<div></div> === javascript value
//    const output=data.map(({title,price})=>
//    <div>{title}<span className="ml-2" style={{color: price>50 ? "red" : "black"}}>{price > 50 ? <strong>{price}</strong> : price}</span></div>)
   
//    const Output = () => output
   
   return (
        // it works like if statement!!
        // if (condition) then result === condition && result
        // data && data.map(({title})=>    
        //  <div>{title}</div>
        <>
        <ShoppingCard products={data}/>
        
        
        </>
       )
            
      
        
  
}