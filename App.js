 import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import Facebook from './component/Facebook';
import Instagram from './component/Instagram';
import Youtube from './component/Youtube';
import './App.css';


const  App = ()=> {

  
 /*  const [ category ,setCategory] = React.useState(Home);

  const filterItem = (category) =>{
  if(category==="instagram"){
    setCategory(Instagram);
    return ;
  }
  else if(category==="facebook"){
   setCategory(Facebook);
   return ;
  }
  else if(category==="youtube"){
    setCategory(Youtube);
    return ;
  } */

  let component 
  
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break;
    case "/Home":
      component = <Home/>
      break;
    case "/Facebook":
      component =<Facebook/>
     break;
    case "/Instagram":
      component = <Instagram/>
      break;
    case "/Youtube":
      component = <Youtube/>
      break;
  }



  return (
   <>

   <Nav/>
   {component}

   </>
  );

}
export default App;
 

