import React from 'react'
import Start from './Start'
import blob_blue from './assets/blob_blue.svg'
import blob_yellow from './assets/blob_yellow.svg'
import Quizzes from './Quizzes'

function App() {
  const [isStarted, setIsStarted] = React.useState(false)

  function handleStart(){
    setIsStarted(prevIsStarted => !prevIsStarted)
  }

  return (
    <div className="App">
      <img src={blob_blue} alt="blob" className='blob-blue'/>
      <img src={blob_yellow} alt="blob" className='blob-yellow'/>
      {isStarted ?  <Quizzes /> : <Start isStarted={handleStart}/>}
    </div>
  )
}

export default App
