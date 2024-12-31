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
import SocietyMember from './Components/SocietyMember'

function App() {
  const [Pagecount, setCount] = useState(0)

  let newvalue = 0;

  function newpage(value){
    console.log("int the app.jsx", value);
    newvalue = value;
    setCount(value);
    console.log("int the app.jsx", value);
  }

  const renderContent = () => {
    switch (Pagecount) {
      case 0:
        return (
          <>
            <UpperFront />
            <MiddleFront />
          </>
        );
      case 1:
        return <Guest />;
      case 2:
        return <SocietyMember />;
      case 3:
        return <CompetionPage />;
      default:
        return <Vithika />;
    }
  };

  return (
    <div>
      <SideBar />
      <TopBar newpage={newpage} />
      {renderContent()}
    </div>
  );


 
}

export default App
