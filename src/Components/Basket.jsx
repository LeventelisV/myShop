import Context from "../Context";
import { useContext } from 'react'
import { NavLink as Link } from "react-router-dom";

export default function Basket() {
    const { selectedProducts, tax, shipping } = useContext(Context)
    let totalCost = 0;
    
    const findCostOfProducts = () => {
        selectedProducts.map((product) => {
            totalCost += product.price;
            return product
        })
        localStorage.setItem("price", totalCost.toFixed(2))
        return totalCost.toFixed(2)
    }

    return (
        <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                        <p className="text-base leading-none text-gray-800">{findCostOfProducts()} €</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">Shipping</p>
                        <p className="text-base leading-none text-gray-800">{shipping} €</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">Tax</p>
                        <p className="text-base leading-none text-gray-800">{tax} €</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">Totall</p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">{totalCost > 0 ? (totalCost + tax + shipping).toFixed(2) + '€' : 0}</p>
                    </div>
                    <Link to="/myShop/buy" className="text-base leading-none w-full py-5 px-6 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}