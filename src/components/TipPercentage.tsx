import type { Dispatch, } from "react"
import { OrderActions } from "../reducer/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
type TipPercentageProps = {
    dispatch: Dispatch<OrderActions>,
    tip: number
}

export default function TipPercentage({dispatch, tip} : TipPercentageProps ) {
  return (
    <div className="mt-4">
            <h3 className="mr-2 font-black">Propina:</h3>
            <form action="">
              {tipOptions.map(tipOption =>(
                
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => dispatch({type:"add-tip", payload: {value:+e.target.value}})}
                        checked={tipOption.value === tip}
                    
                    
                    />
                
                </div>

               ))}
            </form>
           
        </div>
  )
}
