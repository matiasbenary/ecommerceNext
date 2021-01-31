import { Item } from '@typings/Item'
import { createContext } from 'react'

const CartContext = createContext({
  productsCart: 0,
  addProductCart: (product:Item) => null,
  getProductsCart: () => null,
  removeProductCart: (product:Item) => null,
  removeAllProductsCart: (product:Item) => null,
  updateProductCart: (product:Item) => null
})

export default CartContext
