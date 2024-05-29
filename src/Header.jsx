import { useState } from 'react'
import {LOGO_URL,IMG2URL} from '.././utilities/links'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import UserContext from '.././utilities/UserContext'
import { useSelector } from 'react-redux'






const Header=()=>{
 const [logo,setlogo]=useState(IMG2URL)
 const [bee,setbee]=useState("Home")
 const data=useContext(UserContext)
 const data1=useSelector((store)=>(store.cart.items.length))
 
return(
 <div className="header">
 <img className="logo" onMouseOver={()=>{
   logo===LOGO_URL?setlogo(IMG2URL):setlogo(LOGO_URL)
 }}src={logo}alt="Logo" height="40px" width="40px"/>


<h1 className="brand">Foodie Bee</h1>


   <nav className="nav-container">
     <ul className="nav-items">
       <Link to="/"><li onMouseOver={()=>{
         bee==="Beehive"? setbee("Home"):setbee("Beehive")
       }}>{bee}</li></Link>
       <Link to="/a"><li>About</li></Link>
       <Link to="/b"><li>Contact</li></Link>
       <Link to="/c"><li>Cart:{data1}</li></Link>
      <li>{data.loggedUser}</li>


       </ul>
   </nav>


 </div>
)


}
export default Header
