import { useSearchParams } from "react-router-dom"
import reslist from '../utilities/mockData'
import {useDispatch} from 'react-redux'
import { addItems } from "../utilities/cartSlice"
const Items=()=>{
  const dispatch=useDispatch()
  const [searchParams]=useSearchParams()
   const name=searchParams.get("n")
   const restaurant=reslist.filter(res=>res?.info.name===name)
   const resItems=restaurant[0]?.info.items

   const handleClick=(item)=>{{
     dispatch(addItems(item))
   }}
  return(
    <div className="resItems"> 
      {resItems?.map(resl=>
     <><h3 >{resl}</h3> 
     <button onClick={()=>{handleClick(resl)}}>Add</button></>)}
     
    </div>
  )
}
export default Items