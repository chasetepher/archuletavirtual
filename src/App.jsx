import { useState } from 'react'
import DesktopMenu from './desktopMenu.jsx';
import Services from './services.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // console.log(window.screen.width)
  if(window.screen.width < 500) {
    return (
      <div>
        this is the mobile version!
      </div>
    )
  } else {
   return (
    <div className="App">
      <header className="App-header">
        <p className='headline'>ARCHULETA <br/> VIRTUAL</p>
      </header>
      <DesktopMenu/>
      <Services/>
      <About/>
      <Contact/>
      <div className='footer'>
        built by <a href="https://www.linkedin.com/in/chase-riggs/" target='_blank'>ChaseFab</a> 2022
      </div>
    </div>
  )
  }

}

export default App
