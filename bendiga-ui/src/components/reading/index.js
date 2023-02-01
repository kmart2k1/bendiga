import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import jakeImg from '../../assets/about/jakephoto.jpg'
import beeArt from '../../assets/bee-art.png'
import classNames from 'classnames'
import sideart from '../../assets/about/sideart.png'
import topart from '../../assets/about/topart.png'
import logo from '../../assets/about/logo.png'
import monarch from '../../assets/reading/monarch.png'
import SecondaryHeader from '../header/secondaryHeader'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },
  topPart: {
    backgroundImage: `url(${beeArt})`,
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    height: '200px',
    backgroundPositionX: 'center',
  },
  link: {
    marginRight: '24px',
  },
  nav: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
  subheader: {
    fontSize: '24px',
    color: '#c2ca86',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  jake: {
    padding: '12px 0 0 0',
    width: '180px',
    height: '225px',
  },
  jakeText: {
    padding: '8px',
  },
  flowerText: {},
  flowerImage: {
    transform: 'translateX(74px)',
    margin: '0 -16px 0 0',
    height: 'auto',
    width: '150px',
    maxWidth: '250px',
    float: 'right',
    shapeOutside: `url(${sideart})`,
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
  paper: {
    margin: '0 auto',
    padding: '0 0 0 100px',
    backgroundColor: 'white',
    textAlign: 'left',
    maxWidth: '1300px',
    minHeight: 'calc(100vh - 60px + 200px)',
  },
  logo: {
    position: 'absolute',
    height: '50px',
  },
  topPlant: {
    marginTop: '3px',
    textAlign: 'right',
    width: '400px',
  },
  topArtContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const ReadingPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.subheader}
                  style={{ marginTop: '36px', marginBottom: '20px' }}
                >
                  <Link to='/reading/details' style={{color:'#c2ca86', textDecoration:'none'}}>hummingbird</Link>
                </Grid>
                <Grid item xs={12}>
                  Hummingbirds whiz through our yards, beating their tiny wings up to 80 times per second.&nbsp;&nbsp;To keep this up they need food from the garden and a nearby branch to rest on...                  
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img src={monarch} className={classes.topPlant} />
            </Grid>
          </Grid>
          <Grid container></Grid>
        </div>
      </div>
    </>
  )
}

export default ReadingPage
