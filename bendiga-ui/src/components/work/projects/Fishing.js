import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Grid } from '@mui/material'
import sm1 from '../../../assets/work/san-mateo/sm1.jpg'
import sm2 from '../../../assets/work/san-mateo/sm2.jpg'
import sm3 from '../../../assets/work/san-mateo/sm3.jpg'
import sm4 from '../../../assets/work/san-mateo/sm4.jpg'
import sm5 from '../../../assets/work/san-mateo/sm5.jpg'

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
  }
}))

const FishingPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.paper}>
      <Grid item xs={8}>
        <img src={sm1} className={classes.image}/>
        <img src={sm2} className={classes.image}/>
        <img src={sm3} className={classes.image}/>
        <img src={sm4} className={classes.image}/>
        <img src={sm5} className={classes.image}/>
      </Grid>
      <Grid item xs={4} className={classes.textColumn}>
        <div className={classes.subheader}>san mateo county concept</div>
        <div className={classes.architect}>architect: Derek Wee</div>
        A restrained hand was required to preserve views while creating outdoor living space.&nbsp;&nbsp;Subtle color and textural changes create visual interest and contemporary aesthetic.&nbsp;Low water plants add rhythm and movement with sculptural succulents serving as focal points.
      </Grid>
    </Grid>
  )
}

export default FishingPage
