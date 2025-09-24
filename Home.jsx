import React, { useRef, useState } from 'react'

const Home = () => {  
  
    


   let [ time , settime] = useState( )
    
    setInterval(()=> {
      settime(new Date().toLocaleTimeString()) })   


       const [date, setdate]  =  useState(new Date().toLocaleDateString())     

        let  [ count , setcount]  = useState(0) ;   
            
             

  return ( 
    <div>
 
    <h2> Time :{ time}</h2>  
    
      <h2> Date</h2>
      <h3> {date}</h3>    

 
      <h1>{count}</h1> 

      <button onClick={()=> setcount(count+1)}> ++ </button>  

      <button onClick = { ()=> setcount(count-1)}> -- </button> 

      <button onClick= {()=>setcount(0)}>Reset</button>

    </div>     
     
  )
}

export default Home