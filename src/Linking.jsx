import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Body from './Body'
import Items from './Items'



const Linking=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[ {
      path:"/a",
      element:<About/>
    },
    {
      path:"/b",
      element:<Contact/>
    },
    {
      path:"/c",
      element:<Cart/>
    },
    {
      path:"/",
      element:<Body/>,
    },{
    path:"/i",
    element:<Items/>}
  ]
  }
 
])
export default Linking