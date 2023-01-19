import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import bg from '../../assets/contact/bg.png'
import SecondaryHeader from '../header/secondaryHeader'

const useStyles = createUseStyles((theme) => ({
  container: {
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
   // background: `url(${bg})`,
   position:'relative',
    backgroundSize: 'auto',
    margin: '3px auto 0',
    backgroundColor: 'white',
    textAlign: 'left',
    maxWidth: '1400px',
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

const ContactPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
            <img src={bg} style={{width:'100%', zIndex:'100'}}/>
            
          <Grid container style={{zIndex:'200', position:'absolute', top:'100px'}}>
            <Grid item xs={8}>
             
            </Grid>
            <Grid item xs={4} style={{textAlign:'center', fontSize:'14px',color:'#000'}}>
                <p>
             bendiga
             </p>
             <p>ca licensed landscape architect 5699</p>
             <p>phone: 408.209.5506</p>
             <p>email: jakelarc@gmail.com</p>
             <p style={{fontStyle:'italic'}}>web design by keith mar</p>
             
             
             
             
            </Grid>
          </Grid>
          <Grid container></Grid>
        </div>
      </div>
    </>
  )
}

export default ContactPage
