import { OrderActions } from "../reducer/order-reducer"
import type { MenuItem } from "../types"
import { Dispatch } from "react"

type MenuItemProps = {
   item: MenuItem
   dispatch: Dispatch<OrderActions>
  }

const MenuItem = ({item, dispatch} : MenuItemProps) => {
  return (
    <>
      
      <button
          className="w-full text-left p-4 border-b border-gray-200 hover:bg-gray-100 focus:outline-none flex justify-between"
          onClick={() => dispatch({type: "add-item", payload:{item}})}>
      
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </button>
    </>
  )
}

export default MenuItem
