import React from 'react'

const nav = ({filterItem}) => {
  
      return (
    <>   
       <nav className="social-navbar">
        <a href="/Home"class="extra">Home</a>
        <img src="./image/facebook.png" alt =""  className="logo"></img>
     <a /* onClick={ ()=>filterItem("facebook")} */ href="/Facebook" className="color">Facebook</a> 
        <img src="./image/instagram.png" alt =""  className="logo"></img>
      <a /* onClick={ ()=>filterItem("instagram")} */ href="/Instagram" className="color">Instagram</a>
        <img src="./image/youtube.png" alt =""  className="logo"></img>
     <a /* onClick={ ()=>filterItem("youtube")} */ href="/Youtube" className="color">Youtube</a> 
       </nav> 
     

    </>
  )
 

}

export default nav;
