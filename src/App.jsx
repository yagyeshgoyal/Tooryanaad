import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperFront from './Components/UpperFront'
import TopBar from './Components/TopBar'
import SideBar from './Components/SideBar'
import MiddleFront from './Components/MiddleFront'
import Guest from './Components/Guest'
import CompetionPage from './Components/CompetionPage'
import Vithika from './Components/Vithika'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBar/>
      <TopBar/>
      {/* <UpperFront/> */}
      {/* <MiddleFront/> */}
      {/* <Guest/> */}
      {/* <CompetionPage/> */}
      <Vithika/>

      
    </div>
  )
 
}

export default App
