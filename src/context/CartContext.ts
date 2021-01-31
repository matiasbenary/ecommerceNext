import { Item } from '@typings/Item'
import { createContext } from 'react'

type Cart = {
  productsCart: 0,
  addProductCart: (product:Item) => null,
  getProductsCart: () => null,
  removeProductCart: (product:Item) => null,
  removeAllProductsCart: (product:Item) => null,
  updateProductCart: (product:Item) => null
}

const CartContext = createContext({})

export default CartContext
