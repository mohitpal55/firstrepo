import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
            function callfun()
            {
                alert ("Function call");
    
            }
            function apple()
            {
              alert ("Function apple");
            }
            function banana()
            {
              alert("Function banana");
            }
            
             return (
              <div>
              <button onClick={callfun}>OK</button>
              <button onClick={apple}>apple</button>
              <button onClick={banana}>banana</button>        
              </div>
   )
}
export default App
