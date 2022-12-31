import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './components/home'
import AboutPage from './components/about'
import ProcessPage from './components/process'
import WorkPage from './components/work'
import { createUseStyles, useTheme } from 'react-jss'
import mobile from 'is-mobile'
const useStyles = createUseStyles((theme) => ({
  container: {
    margin: '0 16px',
    fontFamily: 'Montserrat, sans-serif',
  },
}))

function App() { 
  const classes = useStyles()
  return (
    <div className="App">
      <div
        className={classes.container}
        style={{ margin: mobile() ? '0 16px' : '0' }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="process" element={<ProcessPage />}></Route>
          <Route path="work" element={<WorkPage />}></Route>
          <Route path="reading" element={<div>Reading</div>}></Route>
          <Route path="contact" element={<div>Contact</div>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
