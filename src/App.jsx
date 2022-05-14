import { useState } from 'react'
// import logo from './logo.img'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src='https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/227404555_2996713700586378_7455940952899518059_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=e3f864&_nc_ohc=H1-nKN7R7g8AX__Z8-C&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-jQytyQ884xVklrDcGTs7zOCpEPt6ad80GeTB7DL3q7w&oe=6282E9A1' className="hero-image" alt="logo" />
        <p>Hello it's Archuleta Virtual and this is a website</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            amount of people who like Alexis is: {count}
          </button>
        </p>
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

export default App
