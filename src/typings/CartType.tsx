import { Item } from './Item'

export type CartType = {
    products: Item[],
    productsCart: number,
    addProductCart: (product:Item) => void,
    getProductsCart: () => void,
    removeProductCart: (product:Item) => void,
    removeAllProductsCart: (product:Item) => void,
    updateProductCart: (product:Item) => void
}
