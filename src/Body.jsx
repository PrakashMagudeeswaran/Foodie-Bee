import {useState} from 'react'
import reslist from '.././utilities/mockData'
import ResCards, {updatedRescards} from './ResCards'
import { useOutletContext } from 'react-router-dom'


const Body=()=>{
   const lists=useOutletContext()
  const UpDated=updatedRescards(ResCards)
 
  return(
 <div className="rescontainer"> 
 
    {lists?.map((restaurant)=>(restaurant.info.promoted?
    (<UpDated


      key={restaurant.info.id}
      name={restaurant.info.name}
      rating={restaurant.info.avgRating}
      imgid={restaurant.info.cloudinaryImageId}
      cuisine={restaurant.info.cuisines.join(", ")}
      deliverytime={restaurant.info.sla.deliveryTime}
      costfortwo={restaurant.info.costForTwo}
      
  
      />) :
      (<ResCards


        key={restaurant.info.id}
        name={restaurant.info.name}
        rating={restaurant.info.avgRating}
        imgid={restaurant.info.cloudinaryImageId}
        cuisine={restaurant.info.cuisines.join(", ")}
        deliverytime={restaurant.info.sla.deliveryTime}
        costfortwo={restaurant.info.costForTwo}
    
    
      
      
        />)))}
         
  
  
    
   
     </div>
  )
}
export default Body