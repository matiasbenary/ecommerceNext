/* eslint-disable react/react-in-jsx-scope */
import Item from '@components/shared/Cart/components/Item'
import CartContext from '@context/CartContext'
import { Item as ItemType } from '@typings/Item'
import Head from 'next/head'
import { useContext } from 'react'

const getTotal = (items:ItemType[]) => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
}

const cart = () => {
  const { products, removeProductCart, updateProductCart } = useContext(CartContext)
  console.log(products)
  return (
        <>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="md:w-9/12 mx-auto flex flex-col items-center content-center">
            <h1 className="text-yellow-400 text-5xl mb-7 text-center">Carrito de compras:</h1>
            {products.map((item:ItemType) => {
              return (
              <Item key={`ItemCart-${item.id}`} item={item} deleteItem={removeProductCart} addItem={updateProductCart}/>
              )
            })}
            <div className="self-end md:pr-6 pr-3" >
            <span className="font-bold text-gray-400">TOTAL: </span>${getTotal(products)}
            </div>
        </div>
      </>
  )
}

export default cart
