import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Grid } from '@mui/material'
import sd1 from '../../../assets/work/san-diego/sd1.jpg'
import sd2 from '../../../assets/work/san-diego/sd2.jpg'
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
  }
}))

const SanDiegoPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.paper}>
      <Grid item xs={8}>
      <img src={sd1} className={classes.image}/>
      <img src={sd2} className={classes.image}/>
      </Grid>
      <Grid item xs={4} className={classes.textColumn}>
        <div className={classes.subheader}>san diego concept</div>
        <div className={classes.architect}>construction date: fall 2023</div>
        <div className={classes.poem}>
        Swaths grasses and colorful succulents welcome visitors while low retaining walls provide structure and order to the front entrance. The pet dog dutifully patrols the front yard, but is easily distracted by a variety of garden scents, plant life, and gurgling water.
        </div>
      </Grid>
    </Grid>
  )
}

export default SanDiegoPage
