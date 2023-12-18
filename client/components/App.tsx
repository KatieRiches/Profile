import Cow from './CowHeader.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Header from './Header.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Cow />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
