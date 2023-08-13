import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import sanMateoSrc from '../../assets/work/san-mateo/t1.jpg'
import fishingSrc from '../../assets/work/fishing-pole/t3.jpg'
import stevensCreekSrc from '../../assets/work/stevens-creek/t2.jpg'
import sanDiegoSrc from '../../assets/work/san-diego/t4.jpg'
import SecondaryHeader from '../header/secondaryHeader'
import { DoubleP } from '../common/textComponents'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },

  link: {
    marginRight: '24px',
  },
image: {
  width:'100%',
},
  paper: {
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'white',
    textAlign: 'left',
    minHeight: 'calc(100vh - 60px + 200px)',
  },
}))

const WorkPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid
            container
            style={{ minHeight: '300px',  }}
            justifyContent="flex-start"
          >
            <Grid
              item
              xs={4}
              style={{
                border: 'solid 4px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
              }}
            >
              <Link to="/work/details/san-mateo">
                <img src={sanMateoSrc}  className={classes.image}/>
              
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                overflow: 'hidden',
                border: 'solid 4px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
              }}
            >
              <Link to="/work/details/stevens-creek"  >
                <img src={stevensCreekSrc} className={classes.image}/>
                
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                overflow: 'hidden',
                border: 'solid 4px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '300px',
                position: 'relative',
              }}
            >
              <Link to="/work/details/fishing">
                <img src={fishingSrc}  className={classes.image}/>
              </Link>
            </Grid>


            <Grid
              item
              xs={4}
              style={{
                border: 'solid 4px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
              }}
            >
              <Link to="/work/details/san-diego">
                <img src={sanDiegoSrc}  className={classes.image}/>
                
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default WorkPage
