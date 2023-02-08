import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './components/home'
import AboutPage from './components/about'
import ProcessPage from './components/process'
import ReadingPage from './components/reading'
import ReadingDetailsPage from './components/reading/details'
import WorkPage from './components/work'
import WorkDetailsPage from './components/work/Details'
import ContactPage from './components/contact'
import { createUseStyles, useTheme } from 'react-jss'
import mobile from 'is-mobile'
import MobilePage from './components/mobile'
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
      {mobile() ? 
      <div><MobilePage/></div>
       :
      <div
      className={classes.container}
      style={{ margin: mobile() ? '0 16px' : '0' }}
    >
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="process" element={<ProcessPage />}></Route>
        <Route path="work/details/:id" element={<WorkDetailsPage/>}></Route>
        <Route path="work" element={<WorkPage />}></Route>
        <Route path="reading" element={<ReadingPage/>}></Route>
        <Route path="reading/details" element={<ReadingDetailsPage/>}></Route>
        <Route path="contact" element={<ContactPage/>}></Route>
        
      </Routes>
    </div>
    }
      
    </div>
  )
}

export default App
