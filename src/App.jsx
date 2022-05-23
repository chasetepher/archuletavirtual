import { useState } from 'react'
import DesktopMenu from './desktopMenu.jsx';
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
      <DesktopMenu/>

        <p>
          <a
            className="App-link"
            href="https://www.instagram.com/archuletavirtual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on Instagram
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.facebook.com/ArchuletaVirtual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on Facebook
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://calendly.com/archuletavirtual/30min?fbclid=IwAR1tCgfdbn0oIRfHbRdFz_8_SL2tnfEnqtFPiKwy97bfHV68J874EP9KCjk&month=2022-05"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a free consultation
          </a>
        </p>
      </header>
    </div>
  )
  }

}

export default App
