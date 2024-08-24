import { useMemo } from "react"
import { OrderItem } from "../types"
import { OrderActions } from "../reducer/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (

    <>
        <div>
            <h2 className="text-2xl font-bold mb-4">Totales</h2>
            <p className="text-lg">Subtotal a pagar: ${subtotalAmount.toFixed(2)}</p>
            <p className="text-lg">Propina: ${tipAmount.toFixed(2)}</p>
            <p className="text-xl font-semibold mt-4">Total a Pagar: ${totalAmount.toFixed(2)}</p>
            <button
            onClick={()=>dispatch({type: "place-order"})}
            className="disabled:opacity-15 w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            disabled={totalAmount===0}
            >
            Guardar Orden
            </button>
        
        </div>
    </>
  )

}
