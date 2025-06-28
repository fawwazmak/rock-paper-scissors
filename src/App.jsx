import { useState } from 'react'
import './App.css'
import Start from './components/Start'

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [systemChoice, setSystemChoice] = useState(null);


  return (
    <>
      <div className='bg-[#344c66] h-full'>
        <Start score={score} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} systemChoice={systemChoice} setSystemChoice={setSystemChoice} />
      </div>
    </>
  )
}

export default App
