const Footer = ()=>{


  const year = ()=>{
    return new Date().getFullYear();
  }
 
 
 
 
 
 
 return(
 <div className="footer">
 CopyRight &copy; {year()}
 </div>
 
 
 
 
 
 
 
 
 
 
 
 
 )
 
 
 
 
 
 
 }
 export default Footer
 