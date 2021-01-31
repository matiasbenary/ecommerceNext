import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'
import './Header.css'
import CartContext from '@context/CartContext'
import React, { useMemo, useState } from 'react'

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
