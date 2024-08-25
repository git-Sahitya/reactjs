import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name : "John",
    age : 23
  }

  let myArr = [1,2,3,4,]

  return (
   <>
   <h1 className='bg-green-400 text-black
   p-4 rounded-xl mb-4'>Tailwind test</h1>
  <Card userName='Lily' />
  <Card userName='Perry' txtBtn='Clickme'/>
   </>
  )
}

export default App
