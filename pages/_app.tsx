import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'
import './Header.css'
import CartContext from '@context/CartContext'
import { useMemo, useState } from 'react'
import { Item } from '@typings/Item'

const cartMock:Item[] = [
  {
    id: 13,
    quantity: 3,
    img: '//cdn.shopify.com/s/files/1/0366/4442/1770/products/6_6b18aa47-355f-4f0b-8a59-212cc2daa96f_300x300.jpg?v=1611096942',
    title: 'Desayuno Dos',
    price: 16
  },
  {
    id: 12,
    quantity: 1,
    img: '//cdn.shopify.com/s/files/1/0366/4442/1770/products/6_6b18aa47-355f-4f0b-8a59-212cc2daa96f_300x300.jpg?v=1611096942',
    title: 'Desayuno werwer werwer fwefwe',
    price: 19
  },
  {
    id: 162,
    quantity: 5,
    img: '//cdn.shopify.com/s/files/1/0366/4442/1770/products/6_6b18aa47-355f-4f0b-8a59-212cc2daa96f_300x300.jpg?v=1611096942',
    title: 'Desayuno',
    price: 31
  }
]

function MyApp ({ Component, pageProps }: AppProps) {
  const [totalProductsCart, setTotalProductsCart] = useState<number>(0)
  const [products, setProducts] = useState<Item[]>(cartMock)

  const addProduct = (product:Item) => {
    setProducts([...products, product])
    setTotalProductsCart(products.length)
  }

  const updateProduct = (product:Item) => {
    const newProducts = [...products]
    const index = newProducts.findIndex(p => p.id === product.id)
    newProducts[index] = product
    setProducts(newProducts)
  }

  const removeProduct = (product:Item) => {
    setProducts(products.filter(p => p.id !== product.id))
    setTotalProductsCart(products.length)
  }

  const removeAllProductsCart = () => {
    setProducts([])
    setTotalProductsCart(0)
  }

  const cartData = useMemo(
    () => ({
      productsCart: totalProductsCart,
      addProductCart: (product:Item) => addProduct(product),
      updateProductCart: (product:Item) => updateProduct(product),
      getProductsCart: () => products,
      removeProductCart: (product:Item) => removeProduct(product),
      removeAllProductsCart: removeAllProductsCart,
      products
    }),
    [totalProductsCart, products]
  )

  return (
    <CartContext.Provider value={cartData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  )
}

export default MyApp
