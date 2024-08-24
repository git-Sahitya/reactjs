import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [card , setCard]= useState(7)

const addValue = () => {
 setCard(card + 1)

}

const removeValue = () => {
 setCard(card - 1)
}


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {card}</h2>

    <button
      onClick={addValue}
    >Add Value-------{card}</button>
    <br/>
    <button
    onClick={removeValue}>Remove Value------{card}</button>
    <p>footer : {card}</p>
    </>
  )
}

export default App
