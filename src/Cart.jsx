import {useDispatch} from 'react-redux'
import {clearItems, removeItems} from '.././utilities/cartSlice'
import { useSelector } from 'react-redux'
import ResCards from './ResCards'

const Cart=()=>{
  const cartItems=useSelector((store)=>(store.cart.items))
  console.log(cartItems)
  const dispatch=useDispatch()
  const clearCart=()=>{
    dispatch(clearItems())
  }
  const handleremove=(item)=>{
   dispatch(removeItems(item))
  }


  return(
    <div>  
      {cartItems.length? (
        <>
      <h2 className="cart">Cart</h2>
      <div className="resItems">
      {cartItems.map(cart=>
       <> <h3>{cart}</h3>
        <button onClick={()=>{handleremove(cart)}}>Remove</button>
        </>
        )}</div>
     <button className="butto" onClick={clearCart}>     Clear</button>
     </>)
     :<h3 className="resItems">Your cart is empty</h3>
     }
    </div>
  )
}
export default Cart