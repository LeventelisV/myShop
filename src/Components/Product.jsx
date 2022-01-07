import { useState, useEffect, useRef } from "react"

export default function Product({ product, selectedProducts, setSelectedProducts }) {

    const [number, setNumber] = useState(0)

    useEffect(
        function () {
          console.log('useEffect',{number})
        },[number]
    );

    const addToBasket = () => {
        //Na valw spread operator
        // product.price=selectedAmountPrice;
        setTimeout(()=>{
            setSelectedProducts(selectedProducts.concat(product))
        },2000)
        
        setNumber(number + 1)

    }

    const removeFromBasket = () => {
        // setSelectedAmountPrice(0)
        // product.selectedAmountPrice = 0
        // console.log(product)
    }





    return (
        <>
            <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                <div className="w-1/4">
                    <img src={product.image} className="w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-3/4">
                    {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{product.title}</p>
                        {/* <select value={amount} onChange={amountChanged} className="py-2 px-1  mr-6 focus:outline-none">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                        </select> */}
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-4">{product.description}</p>
                    {/* <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                                <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p> */}
                    <div className="flex items-center justify-end pt-5 pr-6">
                        <div className="flex items-center">
                            <button onClick={addToBasket} className="mr-6 bg-yellow-500 p-2 px-4 rounded-xl leading-3 text-gray-800 cursor-pointer">Add to basket <span>{number}</span></button>
                            <a className="text-xs  leading-3 underline text-red-500 pl-5 pr-5 cursor-pointer"
                                onClick={
                                    addToBasket}>Remove from the basket</a>
                        </div>
                        <p className="text-base text-xl font-black leading-none text-gray-800">{product.price}</p>

                    </div>
                </div>
            </div>
        </>)
}