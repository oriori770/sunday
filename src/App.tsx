import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./component/helloWorld.tsx"
import Parent from './component/Parent.tsx'
import Counter from './component/Counter.tsx'
import GuessingGame from './component/GuessingGame.tsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Parent name="shneor" />
      <Counter /> */}
      <GuessingGame />
      <div>
        <h1 style={{color:"red"}}>Hello World </h1>    
      </div>
    </>
  )
}

export default App
