import Footer from './components/Footer'
import Header from './components/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
};
const Layout = ({ children }: Props) => {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <Header/>
      <div className="container mx-auto pt-4 px-3 bg-yellow-50">{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
