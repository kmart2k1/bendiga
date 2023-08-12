import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Grid } from '@mui/material'
import fishing from '../../../assets/work/fishing-pole/main.jpg'

const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },

  link: {
    marginRight: '24px',
  },
  subheader: {
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
  textColumn: {
    padding: '8px 32px'
  },
  architect : {
    fontSize: '18px',
    color: '#c2ca86',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom:'32px'
  },
  poem: {
    fontSize:'14px',
    fontStyle:'italic'
  }
}))

const FishingPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.paper}>
      <Grid item xs={8}>
        <img src={fishing} className={classes.image}/>
      </Grid>
      <Grid item xs={4} className={classes.textColumn}>
        <div className={classes.subheader}>gigantic fishing pole</div>
        <div className={classes.architect}>team: tyler, melissa, jake</div>
        <div className={classes.poem}>
        A cold and foggy day<br/>
        On the coast of Morro Bay,<br/>
        We made a gigantic fishing pole<br/>
        </div>
      </Grid>
    </Grid>
  )
}

export default FishingPage
