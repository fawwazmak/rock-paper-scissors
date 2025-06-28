import { useState } from 'react'
import './App.css'
import Start from './components/Start'

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div className='bg-[#344c66] h-full'>
        <Start score={score} />
      </div>
    </>
  )
}

export default App
