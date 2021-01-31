/* eslint-disable react/react-in-jsx-scope */
import { Item as ItemType } from '@typings/Item'
import React, { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import Counter from '@components/shared/Counter'

type Props = {
  item: ItemType;
  deleteItem: (product: ItemType)=> null;
  addItem: (product: ItemType)=> null;
};

const Item = ({ item, deleteItem, addItem }: Props) => {
  const { id, img, price, title } = item
  const [quantity, setQuantity] = useState<number>(item.quantity)

  useEffect(() => {
    if (quantity <= 0) {
      deleteItem(item)
    }
    if (item.quantity !== quantity) {
      addItem({ ...item, quantity })
    }
  }, [quantity, item.quantity])

  return (
    <div className="mb-3 flex flex-col md:flex-row items-center md:justify-around w-full border-2 border-yellow-200 rounded-md bg-yellow-50 p-3">

        <h1 className="font-semibold mb-2.5 text-yellow-400 text-2xl ml-3 text-center  md:self-start md:w-1/4">
            {title}
        </h1>
        <img className="w-8/12 md:w-1/6 rounded-md" src={img} alt="" />

        <Counter count={quantity} setCount={setQuantity}/>

        ${price * quantity}
        <BiTrash className="text-gray-600 hover:text-gray-700 self-end md:text-2xl text-lg mb-2" onClick={() => { deleteItem(item) }}></BiTrash>

    </div>
  )
}

export default Item

/*

type Props = {
  item: ItemType;
  deleteItem: (product: ItemType)=> null;
};
const Item = ({ item, deleteItem }: Props) => {
  const { id, img, quantity, price, title } = item
  return (
    <div className="mb-3 flex flex-col md:flex-row md:items-center md:justify-around w-full border-2 border-yellow-200 rounded-md bg-yellow-50 p-3">
      <div className="flex md:w-1/2">
        <img className="w-1/3" src={img} alt="" />
        <div className="flex justify-around w-full">
          <h1 className="w-full font-semibold mb-2.5 text-yellow-400 md:text-2xl text-lg ml-3">
            {title}
          </h1>
          <BiTrash className="text-red-700 md:text-2xl text-lg" onClick={() => { deleteItem(item) }}></BiTrash>
        </div>
      </div>
      <div className="flex justify-between mt-3 md:pr-3 md:w-1/2">
        <div className="leading-7">
          <span className="font-bold text-gray-400">CANTIDAD:</span>
          <input type="number" className="w-8" value={quantity}/>
        </div>
        <div className="leading-7">
          <span className="font-bold text-gray-400">SUBTOTAL:</span> $
          {price * quantity}
        </div>
      </div>
    </div>
  )
}

export default Item
*/
