import React, { useState, useRef } from "react";
import Product from "./Product"
import Basket from "./Basket";
import LoadingSpiner from "./LoadingSpiner";
import myCss from "../css/myCss.css"
const MemoProduct = React.memo(Product);


function ShoppingCard({ products, error, loading }) {
    console.log('-shoppingCard()')

    const isNoInternet = products === null && error !== null

    const [selectedProducts, setSelectedProducts] = useState([])



    return (
        <>
            <div>
                {(
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    {isNoInternet ? 'NetWork Error' : loading === true ? <LoadingSpiner /> :
                                        products.map((product) => {
                                            return (
                                                <MemoProduct
                                                    product={product}
                                                    key={product.id}
                                                    selectedProducts={selectedProducts}
                                                    setSelectedProducts={setSelectedProducts} />
                                            )
                                        })
                                    }
                                </div>
                                <Basket selectedProducts={selectedProducts} />

                            </div>
                        </div>
                    </div>
                )}
            </div>


        </>
    );
}

export default ShoppingCard;
