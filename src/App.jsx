import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Train from './assets/Train.JPG'
import Thisone from './assets/Thisone.JPG'
import loveheart from './assets/LoveHeart.JPG'
import thatone from './assets/thatone.JPG'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={Train} className="logolarge react" alt="React logo" />
        <img src={Thisone} className="logolarge react" alt="React logo" /> 
        <img src={thatone} className="logolarge react" alt="React logo" />       
        <h1>Te quiero mi amor</h1>
        <img src={loveheart} className="logo react" alt="React logo" />  
      </header>
    </div>
  );
}

export default App
