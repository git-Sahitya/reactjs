import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 1 type to method to run a given element
function myApp(){
  return(
    <div>
      <h1>Hello  React</h1>
    </div>
  )
}

// 2nd type

const anotherElement = (
  <a href="https://google.com" target = '_blank'>Visit google</a>
)

// 3rd type

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_black'},
  'Click me to visit google'
)

// 4th type

const anotherUser = "Chai pe Charcha"

const reactAnotherElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_black'},
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).
render(
<App/>
)
     