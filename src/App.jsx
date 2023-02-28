import './App.css'
import Circle from './components/Circle';
import Button from './components/Button';
import { useState } from "react";


function App() {

  const [onOff, setOnOff] = useState("circle")

  const handleClick = () =>{
    if(onOff==="circle-off"){
      setOnOff("circle")
    } else{
      setOnOff("circle-off")
    }
  }

  return (
    <div className="App">
      <div className='container'>
      < Circle onOff={onOff} />
        <Button handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App
