import { useState, useEffect } from 'react'
import './App.css'
import Start from './components/Start'

function App() {
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem('score');
    return storedScore ? parseInt(storedScore, 10) : 0;
  });
  const [playerChoice, setPlayerChoice] = useState(null);
  const [systemChoice, setSystemChoice] = useState(null);

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return (
    <>
      <div className='bg-[#344c66] h-full'>
        <Start score={score} setScore={setScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} systemChoice={systemChoice} setSystemChoice={setSystemChoice} />
      </div>
    </>
  )
}

export default App
