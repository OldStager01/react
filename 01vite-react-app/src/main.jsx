import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//Creating Custom React Element
const reactElement=React.createElement(
  "a",
  {
    href:"https://www.google.com",
    target:"_blank"
  },
  "Click me to visit google"
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
// )
//<App /> can also be written as App()
//OR
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)