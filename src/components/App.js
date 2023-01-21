import React, { useState } from 'react'
import '../styles/App.css';

function App() {
  const [style,setStyle] = useState(true);

  const toggle=()=>{
     console.log('toggle') 
     let temp = !style;
     setStyle(temp);
  }
  return (
    
    <div>
      <div id="main">
        {style?<p className="redColor">Newton School</p>:<p className="blueColor">Newton School</p>}
        
        <button onClick={toggle} id="button">Change Style</button>
      </div>
      
    </div>
  )
}

export default App
