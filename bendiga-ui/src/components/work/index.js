import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import sanMateoSrc from '../../assets/work/san-mateo.jpg'
import fishingSrc from '../../assets/work/fishing-pole.jpg'
import stepsSrc from '../../assets/work/steps.jpg'
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
          <Grid container style={{ minHeight: '300px' }}>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{
                overflow: 'hidden',
                border: 'solid 4px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                minHeight: '300px',
              }}
            >
              <Link to="/work/details/san-mateo">
              <img src={sanMateoSrc} />
              <div
                style={{
                  position: 'absolute',
                  color: '#ffffff',
                  fontStyle: 'italic',
                  fontSize: '24px',
                  padding: '16px 24px',
                }}
              >
                san mateo county concept
              </div>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{
                overflow: 'hidden',
                border: 'solid 4px #ffffff',
                borderLeft: 'solid 2px #ffffff',
                borderRight: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                minHeight: '300px',
              }}
            >
              <Link to="/work/details/stevens-creek">
              <img src={stepsSrc} style={{ objectFit: 'contain' }} />
              <div
                style={{
                  position: 'absolute',
                  color: '#ffffff',
                  fontStyle: 'italic',
                  fontSize: '24px',
                  padding: '16px 24px',
                }}
              >
                stevens creek
              </div>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{
                overflow: 'hidden',
                border: 'solid 4px #ffffff',
                borderLeft: 'solid 2px #ffffff',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                minHeight: '300px',
              }}
            >
              <Link to="/work/details/fishing">
              <img src={fishingSrc} />
              <div
                style={{
                  position: 'absolute',
                  color: '#ffffff',
                  fontStyle: 'italic',
                  fontSize: '24px',
                  padding: '16px 24px',
                }}
              >
                gigantic fishing pole
              </div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default WorkPage
