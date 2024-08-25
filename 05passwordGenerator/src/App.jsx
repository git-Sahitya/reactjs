import { useState ,  useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numAllow,setNumAllow] = useState(false)
  const[charAllow,setCharAllow] = useState(false)
  const[password,setPassword] = useState("")                                                                                                                                                                                                                                                                                                                                                                                                                 

  // for usecallback we have two things 1st-function and 2nd-Dependencies(for ex-lenght,numAllow,CharAllow etc) in squareBracket- []

    const passwordGenerator = useCallback(()=>{
      let pass =''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
      if (numAllow) {
        str += "0123456789"
      }
      if (numAllow) {
        str += '!@#$%^&*()_~[]{}:<>;>'
      }

                                                                                                                 

    }, [length,numAllow,charAllow,setPassword])
  

  return (
    <>
     <h1 className='text-4xl text-center'
     >PasswordGenerator</h1>
    </>
  )
}

export default App
