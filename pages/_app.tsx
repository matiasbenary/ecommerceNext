import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'
import CartContext from '@context/CartContext'
import React from 'react'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  )
}

export default MyApp
