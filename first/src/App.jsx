import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name ="abhi";
  let x=24;
  let y=29;
  function fun()
  {
    return"inside fun function";
  }
  function sum(x,y)
  {
    return x+y;
  }
  

   return (

    <div>
    <h1>project run</h1>
  <h3>value of variable is {name}</h3>
  <h3>{x+y}</h3>
  <h1>use of functuons with jsx</h1>
  <h1>MOHIT</h1>
  <h3>{fun()}</h3>
  <h3>{sum (20,8)}</h3>
 </div> 
 )
}


export default App
