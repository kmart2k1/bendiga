import React from 'react'
import logo from '../../assets/about/logo.png'
import butterfly from '../../assets/about/butterfly.png'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(194,202,134,.2)',
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },
  link: {
    marginRight: '24px',
  },
  nav: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
  navContainer: {
    display: 'flex',
    backgroundColor: '#c2ca86',
    alignItems: 'center',
    height: '80px',
  },
  navItem: {
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    fontStyle: 'italic',
    fontSize: '28px',
    margin: '0 20px',
  },
  logo: {
    position: 'absolute',
    height: '50px',
  },
  butterfly: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}))

const SecondaryHeader = ({}) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.logo}>
        <img src={logo} style={{ height: '80px' }} />
      </div>
      <div className={classes.navContainer}>
        <div className={classes.navItem} style={{ marginLeft: '100px' }}>
          <a href="/" className={classes.link}>
            home
          </a>
        </div>
        <div className={classes.navItem}>
          <a href="about" className={classes.link}>
            about
          </a>
        </div>
        <div className={classes.navItem}>
          <a href="process" className={classes.link}>
            process
          </a>
        </div>
        <div className={classes.navItem}>work</div>
        <div className={classes.navItem}>contact</div>
      </div>
      <div className={classes.butterfly}>
        <a href="reading">
          <img src={butterfly} style={{ height: '40px' }} />
        </a>
      </div>
    </>
  )
}

export default SecondaryHeader
