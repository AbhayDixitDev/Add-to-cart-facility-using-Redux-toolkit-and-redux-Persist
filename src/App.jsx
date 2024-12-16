import { useSelector, useDispatch } from "react-redux"
import { addToCart,removeFromCart } from "./reduxSlices/cartSlice";

const App=()=> {
 const cart = useSelector(state => state.cart.data)
 const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(removeFromCart())}>Remove</button>
      {cart}
      <button onClick={()=>dispatch(addToCart())}>Add</button>
    </div>
  )
}

export default App