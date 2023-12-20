import Cow from './CowHeader.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Header from './Header.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Cow />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
