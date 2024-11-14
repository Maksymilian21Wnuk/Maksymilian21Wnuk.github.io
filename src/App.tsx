import { Route, Routes } from 'react-router'
import About from './routes/About'
import Projects from './routes/Projects'
import Home from './routes/Home'
import Nav from './routes/Nav'
import Me from './routes/about_routes/Me'
import Experience from './routes/about_routes/Experience'
import Skills from './routes/about_routes/Skills'
import "./app.css"
import Education from './routes/about_routes/Education'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />}>
            <Route path="/About/Me" element={<Me />} />
            <Route path="/About/Education" element={<Education />} />
            <Route path="/About/Experience" element={<Experience />} />
            <Route path="/About/Skills" element={<Skills />} />
            </Route>
        </Route>
        </Routes>
    </div>
  )
}

export default App
