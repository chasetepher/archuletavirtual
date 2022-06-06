import { useState } from 'react'
import DesktopMenu from './desktopMenu.jsx';
import Services from './services.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Hero from './hero.jsx';
import Testimonials from './testimonials.jsx';
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
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
      <Testimonials/>
      <div className='footer'>
        built by <span className='chasefab'><a href="https://www.linkedin.com/in/chase-riggs/" target='_blank'>ChaseFab</a></span> 2022
      </div>
    </div>
  )
  }

}

export default App
