       
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