import { useState, useContext, useEffect } from "react"
import Context from "../Context"


export default function Product({ product }) {
    const { selectedProducts, setSelectedProducts } = useContext(Context)
    const [number,setNumber] = useState(0)

    const addToBasket = () => {
        setSelectedProducts(selectedProducts.concat(product))
    }

    const removeFromBasket = () => {
        let productIndex = selectedProducts.findIndex(arrayProduct => arrayProduct.id === product.id)
        if (productIndex >= 0) {
            let selectedProductsCopy = [...selectedProducts]
            selectedProductsCopy.splice(productIndex, 1)
            setSelectedProducts(selectedProductsCopy)
        }
    }

    useEffect(() => {
        let number = 0;
        localStorage.setItem('localStorageProducts', JSON.stringify(selectedProducts))
        const products = JSON.parse(localStorage.getItem('localStorageProducts'))
        products.forEach((pro)=>{
            if(pro.id === product.id){
                number = number +1
            }   
        })
        setNumber(number)
    }, [selectedProducts,product])

    return (
        <article className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
                <img src={product.image} className="w-full h-full object-center object-cover" />
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{product.title}</p>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-4">{product.description}</p>
                <div className="flex items-center justify-end pt-5 pr-6">
                    <div className="flex items-center">
                        <button onClick={addToBasket} className="mr-6 bg-yellow-500 p-2 px-4 rounded-xl leading-3 text-gray-800 cursor-pointer">Buy<span className="ml-2">{number > 0 ? number : null}</span></button>
                        <a className="text-xs  leading-3 underline text-red-500 pl-5 pr-5 cursor-pointer"
                            onClick={removeFromBasket}>Remove from the basket</a>
                    </div>
                    <p className="text-base text-xl font-black leading-none text-gray-800">{product.price}</p>
                </div>
            </div>
        </article>
    )
}