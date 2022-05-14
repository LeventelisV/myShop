import React, { useContext } from "react";
import Product from "./Product"
import Basket from "./Basket";
import LoadingSpiner from "./LoadingSpiner";
import CategorySearch from "./CategorySearch";
import Context from "../Context";

const MemoProduct = React.memo(Product);

function ShoppingCard() {
    const { category, loading, error, products } = useContext(Context)
    const hasErrors = error !== null;
    const isNetworkError = [] && hasErrors;

    const displayedProducts = () => {
        if (category === '-1') {
            return products
        }
        let categoryProducts = [...products].filter((product) => {
            return product.category === category
        })
        return categoryProducts
    }

    return (
        <>
            <div>
                {(
                    <div className="w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 relative w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    {!loading && <CategorySearch />}
                                    {isNetworkError && 'Network Error'}
                                    {loading && <LoadingSpiner />}
                                    {displayedProducts().map((product) => {
                                        return (
                                            <MemoProduct
                                                product={product}
                                                key={product.id}
                                            />
                                        )
                                    })
                                    }
                                </div>
                                <Basket />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ShoppingCard;
