/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import { CartContext } from '@context/CartContext'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Counter from '@components/shared/Counter'
import { CartType } from '@typings/CartType'

export default function Product () {
  const { addProductCart } = useContext(CartContext) as CartType
  const [quantity, setQuantity] = useState<number>(1)
  const [flag, setFlag] = useState<boolean>(false)

  const AddQuantity = (number:number) => {
    setQuantity(number || 1)
  }

  const addProduct = () => {
    addProductCart({
      id: Math.random() * 100,
      quantity,
      img: '//cdn.shopify.com/s/files/1/0366/4442/1770/products/6_6b18aa47-355f-4f0b-8a59-212cc2daa96f_300x300.jpg?v=1611096942',
      title: 'Desayuno Dos',
      price: 1600
    })
    setFlag(true)
  }
  return (
    <>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col content-center md:flex-row ">
        <div className="md:w-1/2">
        <img
            src="//cdn.shopify.com/s/files/1/0366/4442/1770/products/6_6b18aa47-355f-4f0b-8a59-212cc2daa96f_300x300.jpg?v=1611096942"
            className="inset-0 w-full h-full object-cover rounded-lg"
           />
        </div>

        <div className="flex flex-col items-center justify-items-end mt-2 ml-4 md:w-1/2">
        {flag &&
        <div className="inline-flex items-center bg-white leading-none rounded-full p-2 shadow text-teal text-sm">
            <span className="inline-flex px-2 text-gray-700">
                Se agregaron {quantity} de Desayuno artesanal al carrito
            </span>
        </div>
        }
          <h1 className="font-semibold mb-2.5 text-yellow-400 text-4xl mb-3">
            Desayuno artesanal
          </h1>
          <div className="leading-7 font-bold text-gray-400 mb-3">
            $1600
          </div>
          <Counter count={quantity} setCount={AddQuantity}></Counter>
          <div className="rounded-md my-4">

              <button onClick={addProduct} className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                Agregar al carrito
              </button>
            </div>
            <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eum aliquid quos? Accusamus eos animi culpa nobis, odit fuga, asperiores quaerat natus tenetur mollitia, dolorum quos? Alias amet libero numquam.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem minima, adipisci, magni modi error ad sunt eaque sint sit, quibusdam nobis culpa quidem placeat consequatur autem deleniti provident facere.
        </div>

      </div>
    </>
  )
}
