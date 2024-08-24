import { OrderActions } from "../reducer/order-reducer";
import { OrderItem } from "../types"
import { Dispatch } from "react";

type OrderContentProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
}

export default function OrderContent({order, dispatch}: OrderContentProps) {
  console.log(order);
  
  return (
    <div>
      <div className="space-y-3 mt-5">
        {order.map(item => (
          <div key={item.id} className="p-4 border rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-xl text-gray-700">${item.price.toFixed(2)}</p>
              </div>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                onClick={() =>dispatch({type: "remove-item", payload:{id: item.id}})}
              >
                Eliminar
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg text-gray-600">Cantidad: {item.quantity}</p>
              <p className="text-lg text-gray-600">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
