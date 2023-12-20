import Cow from './CowHeader.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Cow />
          <About />
          <Projects />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
