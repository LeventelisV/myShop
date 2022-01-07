import React, { useState, useRef } from "react";
import Product from "./Product"
import Basket from "./Basket";

function ShoppingCard({ products }) {
    let initialCategories = [];

    products.map((product) => {
        initialCategories.indexOf(product.category) === -1 ? initialCategories.push(product.category) : console.log('already exists')
    })


    const [selectedProducts, setSelectedProducts] = useState([])

    const MemoProduct = React.memo(Product);

    return (
        <>
            <div>
                {/* <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div> */}
                {(
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    {/* <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div> */}
                                    {/* {initialCategories.map((category)=>{
                                     return (  
                                        
                                     <p className="text-5xl font-black leading-10 text-gray-800 pt-3">{category}</p>
                                     
                                     
                                    )})} */}


                                    {products.map((product) => {
                                        return (<MemoProduct
                                            product={product}
                                            key={product.id}
                                            selectedProducts={selectedProducts}
                                            setSelectedProducts={setSelectedProducts} />)
                                    })}

                                </div>

                                <Basket selectedProducts={selectedProducts} />

                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default ShoppingCard;
