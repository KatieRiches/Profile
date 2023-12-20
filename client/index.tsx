import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cow from '../client/components/CowHeader.tsx'
import About from '../client/components/About.tsx'
import Projects from '../client/components/Projects.tsx'
import Header from '../client/components/Header.tsx'
import Footer from '../client/components/Footer.tsx'
import App from './components/App.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cow" element={<Cow />} />
        </Routes>
        <Header />
        <Footer />
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>,
  )
})
