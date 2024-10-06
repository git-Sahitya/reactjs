import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
 // const [multipliedValue, setMultipliedValue] = useState(1)
 // Another method... without using state!!
 let multipliedValue = value * 5
  const [addValue, setAddValue] = useState(1)
   

  const multiplybyfive = () => {
     // setMultipliedValue(value * 5)
      setValue (value + 1)
  }

   const addedValue = ()=>{
    setAddValue( value + 7)
    setValue(value + 1)

   }
  
  return (
    <>
     <h1>Main Value :{value} </h1>
     <button
     onClick={multiplybyfive}
     >Click me</button>
     <h2>Multiplied Value : {multipliedValue}  </h2>
     <button
     onClick={addedValue}
     >Click Here</button>
     <h3>Added by 7 : {addValue} </h3>
    </>
  )
}

export default App
