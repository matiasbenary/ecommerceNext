import CartContext from '@context/CartContext'
import React, { useContext } from 'react'
import Card from '../Card'

const CardContainer = () => {
  return (
        <div className="flex flex-wrap box-content -mx-1 lg:-mx-4 py-3">
            <Card />
            <Card/>
            <Card />
        </div>
  )
}

export default CardContainer
