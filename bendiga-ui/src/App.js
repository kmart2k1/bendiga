import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './components/home'
import AboutPage from './components/about'
import {createUseStyles, useTheme} from 'react-jss'

const useStyles = createUseStyles((theme) =>({
  container: {
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
     
      <Header/>
      <div className={classes.container}>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="about" element={<AboutPage/>}></Route>
          <Route path="process" element={<div>Process</div>}></Route>
          <Route path="work" element={<div>Work</div>}></Route>
          <Route path="reading" element={<div>Reading</div>}></Route>
          <Route path="contact" element={<div>Contact</div>}></Route>
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
