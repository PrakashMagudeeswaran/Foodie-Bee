import { Link } from 'react-router-dom'
import {IMG_URL} from '.././utilities/links'
import {useDispatch} from 'react-redux'



const ResCards=({name,rating,imgid,cuisine,deliverytime,costfortwo})=>{

  const dispatch = useDispatch()
 
return(


 <div className="rescard">
 <Link to={"/i?n="+name}><img height="100px" width="90px"src={IMG_URL+imgid} alt="foodimage"/></Link>
 <h4 className="resname">{name}</h4>
 <p>{cuisine}</p>
 <p>Rating:{rating}</p>
 <p>Delivery Time: {deliverytime+"minutes"}</p>
 <p>{costfortwo}</p>

</div>
 


)
}

export const updatedRescards=(ResCards)=>{
  return(props)=>{
    return(
      <div>
      <label className="promo"> Promoted</label>
      <ResCards{...props}/>
      </div>
    )
  }
}
export default ResCards




