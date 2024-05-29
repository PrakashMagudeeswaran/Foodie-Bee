import './App.css'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Search from './Search'
import {useState} from 'react'
import reslist from '../utilities/mockData'
import {Outlet} from 'react-router-dom'
import {useContext} from 'react'
import UserContext from '.././utilities/UserContext'
import {Provider} from 'react-redux'
import appStore from '../utilities/appStore'
import Body from './Body'







function App() {
 const data=useContext(UserContext)
  const [context,setcontext]=useState(data.loggedUser)
 let [lists,setlists]=useState(reslist)
 let [flists,setflists]=useState(reslist)
 

 return (
   <Provider store={appStore}>
   <UserContext.Provider value={{loggedUser:context}}>
   <>
    <Header/>
    <Search
    lists={lists}
    setlists={setlists}
    flists={flists}
    setflists={setflists}/>
    <Filter
    lists={lists}
    setlists={setlists}
    setcontext={setcontext}
    />
    <Outlet
    context={lists}
      />
    <Footer/>
    </>    </UserContext.Provider></Provider>
 )
}


export default App