import { Item } from './Item'

export type CartType = {
    products: Item[],
    productsCart: 0,
    addProductCart: (product:Item) => null,
    getProductsCart: () => null,
    removeProductCart: (product:Item) => null,
    removeAllProductsCart: (product:Item) => null,
    updateProductCart: (product:Item) => null
}
