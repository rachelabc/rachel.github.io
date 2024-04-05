import NavBar from "./components/NavBar"
import Button from "./components/Button"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [count, setCount] = useState(0)





  return (

    <div >
      <NavBar />
      <div className="container">
        <div> <h1>Jamz </h1> <h2> React App</h2></div>
        <div><img class="img" src="../public/whitehouse jam jar.png" alt=""></img> </div>
      </div>


      <p className="read-the-docs">

      </p>
    </div >)
}


