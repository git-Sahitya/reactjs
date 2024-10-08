       
      function customRender(reactElement, Container){
        // your custom rendering logic here 

       const domElement =document.createElement
       (reactElement.type)
       domElement.innerHTML = reactElement.props.children
       for (const prop in reactElement.props) {
         if(prop === 'children') continue;
         domElement.setAttribute(prop,reactElement.props[prop])
       }
       Container.appendChild(domElement)
      } 



       const reactElement = {
        type : 'a',
        props : { 
            href :'https://google.com',
            target : '_blank'
       },
       children : 'click me to visit google'
    }

    const mainContainer = document.querySelector('#root')

    customRender(reactElement,mainContainer)

    import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
  
     <div className='w-full h-screen duration-200' 
      style={{backgroundColor : color}}
     >
      <div className='fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 
        rounded-3xl'>
          <button
          onClick={ ()=> setColor("red")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "red"}}
          >Red</button>
          <button
           onClick={ ()=> setColor("green")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "green"}}
          >Green</button>
          <button
           onClick={ ()=> setColor("orange")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "orange"}}
          >Orange</button>
          <button
           onClick={ ()=> setColor("gray")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "gray"}}
          >Gray</button>
          <button
           onClick={ ()=> setColor("blue")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
           onClick={ ()=> setColor("pink")}
           className='outline-none px-4 py-1 rounded-full
           text-black shadow-lg'
           style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
           onClick={ ()=> setColor("purple")}
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg'
           style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
           onClick={ ()=> setColor("lavender")}
           className='outline-none px-4 py-1 rounded-full
           text-black shadow-lg'
           style={{backgroundColor: "lavender"}}
          >lavender</button>
          <button
           onClick={ ()=> setColor("white")}
           className='outline-none px-4 py-1 rounded-full
           text-black shadow-lg'
           style={{backgroundColor: "white"}}
          >white</button>
        </div>
      </div>
     </div>
  
  )
}

export default App
