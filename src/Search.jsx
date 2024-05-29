import { useState } from "react"


const Search=({lists,setlists,flists,setflists})=>{
 const [inputValue,setinputValue]=useState("")
  const handleChange=(event)=>{
   event.preventDefault()
   const filter=flists.filter(val=>val.info.name.toLowerCase().includes(inputValue.toLowerCase())||val.info.cuisines.some(cuisine=>cuisine.toLowerCase().includes(inputValue.toLowerCase())))
   setlists(filter)
   setinputValue("")
 }










 return(
  <form className="btn">
   <input onChange={(e)=>{setinputValue(e.target.value)}} type="text" value={inputValue}/>
   <button onClick={(event)=>{handleChange(event)}}>Search</button>














  </form>
 )
}
export default Search
