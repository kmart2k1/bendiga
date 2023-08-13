import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Grid } from '@mui/material'
import allSrc from '../../../assets/work/stevens-creek/all.jpg'
const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },

  link: {
    marginRight: '24px',
  },
  subheader: {
    padding:'36px 0 8px 0',
    fontSize: '24px',
    color: '#c2ca86',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  paper: {
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'white',
    textAlign: 'left',
    maxWidth: '1200px',
    minHeight: 'calc(100vh - 60px + 200px)',
  },
  image: {
    width:'100%',
    height:'auto',
    padding: '8px 0'
  },
  lowerleftimage: {
    height:'600px'
  },
  lowerrightimage: {
    width: '100%',
    height:'600px',
  },
  textColumn: {
    padding: '8px 32px'
  },
  architect : {
    fontSize: '18px',
    color: '#c2ca86',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom:'20px'
  }

}))

const StevensCreekPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.paper}>
      <Grid item xs={8}>
        <img src={allSrc} style={{width:'100%'}} className={classes.image}/>
        
        
        
      </Grid>
      <Grid item xs={4} className={classes.textColumn}>
        <div className={classes.subheader}>stevens creek</div>
        <div className={classes.architect}>architect: Derek Wee<br/>
        contractor: Earthcare Landscaping</div>
        Stone retaining walls and steps were carefully crafted to blend in with the existing landscape.&nbsp;&nbsp;There are also raised vegetable beds and a studio shed to house legos.
      </Grid>
    </Grid>
  )
}

export default StevensCreekPage
