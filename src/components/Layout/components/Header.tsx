import { CartContext } from '@context/CartContext'
import { CartType } from '@typings/CartType'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { IoCart, IoMenuOutline } from 'react-icons/io5'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const { productsCart } = useContext(CartContext) as CartType

  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap justify-between items-center lg:py-4 py-2 shadow-sm mx-auto">
      <h3>Logo</h3>
      <Link href="/cart">
      <div className="flex lg:order-1 cursor-pointer">
        <div className="text-md text-4xl relative">
          <span className="w-4 h-4 rounded-full absolute left-6 leading text-xs bg-yellow-200 flex items-center justify-center">
            {productsCart}
          </span>
          <IoCart className="text-black h-8 w-8" />
        </div>
        <button
          className="cursor-pointer lg:hidden focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <IoMenuOutline className="text-4xl ml-4" />
        </button>
      </div>
      </Link>

      <div
        className={
          'lg:flex flex-grow lg:flex-grow-0 items-center' +
          (navbarOpen ? ' flex w-full' : ' hidden')
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="my-2 text-gray-600 hover:text-gray-800 lg:mx-3">
            <Link href="/">Inicio</Link>
          </li>
          <li className="my-2 text-gray-600 hover:text-gray-800 lg:mx-3">
            <Link href="/product">Productos</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
