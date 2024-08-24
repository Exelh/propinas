
import { useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducer/order-reducer";

function App() {

  

  const [state, dispatch] = useReducer (orderReducer, initialState)  

  return (
    <>

      <Header />

      <main className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-5">
            <h2 className=" text-center text-2xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">
              Menú
            </h2>
            {menuItems.map((item) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                dispatch={dispatch}

                
              />
            ))}
          </div>
          <div className=" border border-dashed border-slate-300 p-5 rounded-lg ">
            <h2 className=" text-center text-2xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">
                Consumo
            </h2>
            {state.order.length > 0 ? (
              <>
                <OrderContent
                  order={state.order} 
                  dispatch={dispatch}
                />
                <TipPercentage
                  dispatch={dispatch}
                  tip={state.tip}
                />
                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              
              </>
            ) : (

              <h2 className="text-center text-1xl font-bold">Agrega consumos a la orden, actualmente se encuentra vacia </h2>


            ) }
            
          </div>
      </main>
      <Footer/>
    
    </>
  )
}

export default App
