import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Grid } from '@mui/material'
import sc1 from '../../../assets/work/stevens-creek/sc1.jpg'
import sc2 from '../../../assets/work/stevens-creek/sc2.jpg'
import sc3 from '../../../assets/work/stevens-creek/sc3.jpg'
import sc4 from '../../../assets/work/stevens-creek/sc4.jpg'
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
    fontSize: '14px',
    color: '#c2ca86',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom:'32px'
  },
  lowerleft: {
    backgroundImage: `url(${sc2})`,
    width:'100%',
    height:'600px',
  },
  lowerright: {
    backgroundImage: `url(${sc3})`,
    width:'100%',
    height:'600px',

  }

}))

const StevensCreekPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.paper}>
      <Grid item xs={8}>
        <Grid container>
            <Grid item xs={12}><img src={sc1} className={classes.image}/></Grid>
            <Grid item xs={12}>
                <Grid container spacing={0}>
                    <Grid item xs={4} style={{paddingRight:'16px'}}>
                        <div className={classes.lowerleft}>

                        </div>
                    </Grid>
                    <Grid item xs={8} >
                    <div className={classes.lowerright}>

</div>
                    </Grid>
                </Grid>
            
            
            
            </Grid>
            <Grid item xs={12}><img src={sc4} className={classes.image}/></Grid>
        </Grid>
        
        
        
        
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
