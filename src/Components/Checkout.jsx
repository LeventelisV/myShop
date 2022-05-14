import { useContext, useEffect, useRef } from "react"
import Context from "../Context"
import useForceUpdate from 'use-force-update';
import { NavLink as Link } from "react-router-dom";


export default function Checkout() {
  const forceUpdate = useForceUpdate();
  const { selectedProducts, tax, shipping, } = useContext(Context)
  const productsPrice = Number(localStorage.getItem('price'))
  const buyProducts = useRef([])

  // findOcc checks if an the new selected item is already selected and so just is needed to update quantity
  //else adds ot to the aray

  function findOcc(arr, key,) {
    buyProducts.current = []
    arr.forEach((x) => {
      if (buyProducts.current.some((val) => { return val[key] === x[key] })) {
        buyProducts.current.forEach((k) => {
          if (k[key] === x[key]) {
            k['selected']++
          }
        })
      }
      else {
        let a = JSON.parse(JSON.stringify(x))
        a['selected'] = 1
        buyProducts.current.push(a)
      }
    })
  }

  useEffect(() => {
    console.log('useEffect')
    findOcc(selectedProducts, 'id')
    forceUpdate()
  }, [selectedProducts,forceUpdate])

  return (
    <div className="bg-white">
      <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-yellow-400" aria-hidden="true" />
      <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-yellow-400 text-black pt-6 pb-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>
            <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-10">
              {buyProducts.current.map((product) => (
                <li key={product.id} className="flex items-start py-6 space-x-4">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="flex-none w-20 h-20 rounded-md object-center object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="">{product.title}</h3>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium ">{product.price} x {product.selected}</p>
                </li>
              ))}
            </ul>

            <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>{localStorage.getItem('price')}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>{shipping}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>{tax}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-white border-opacity-10  pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{(productsPrice + tax + shipping).toFixed(2)} €</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form>
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
              <div>
                <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                  Contact information
                </h3>

                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 id="payment-heading" className="text-lg font-medium text-gray-900">
                  Payment details
                </h3>

                <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        autoComplete="address-level1"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Billing information</h3>

                <div className="mt-6 flex items-center">
                  <input
                    id="same-as-shipping"
                    name="same-as-shipping"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"
                  />
                  <div className="ml-2">
                    <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                      Same as shipping information
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between pt-6 border-t border-gray-200">
                <Link to="/"
                  className="bg-red-800 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500">
                  Back
                </Link>
                <button
                  type="submit"
                  className="bg-green-800 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500">
                  Pay now
                </button>

              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

