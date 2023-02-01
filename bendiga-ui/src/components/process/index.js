import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import jakeImg from '../../assets/about/jakephoto.jpg'
import beeArt from '../../assets/bee-art.png'
import classNames from 'classnames'
import sideart from '../../assets/process/milkweed.png'
import SecondaryHeader from '../header/secondaryHeader'
import { DoubleP } from '../common/textComponents'

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
  butterfly: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  topPlant: {
    width: '300px',
    paddingTop: '40px',
  },
  topArtContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const AboutPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid
                  item
                  xs={8}
                  style={{ fontStyle: 'italic', marginTop: '36px' }}
                >
                  The following phases outline a project's general design
                  path.&nbsp;&nbsp;Depending on project size and scope, certain
                  phases may be combined or omitted.
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.subheader}
                  style={{margin:'36px 0 20px 0'}}
                >
                  concept design
                </Grid>
                <Grid item xs={12}>
                  <DoubleP>
                    The concept design depicts the spaces and general hardscape
                    and plant design, based on discussions and site visits with
                    the owner, and local and state ordinances.&nbsp;&nbsp;These
                    drawings allow the owner and designer to freely sketch out
                    ideas.&nbsp;&nbsp;3-D renderings are also available.
                  </DoubleP>
                </Grid>
                <Grid item xs={12} className={classes.subheader} style={{margin:'36px 0 20px 0'}}>
                  design development
                </Grid>
                <Grid item xs={12}>
                  <DoubleP>
                    Once the concept design is approved, the design is drafted
                    on the computer in more detail.&nbsp;&nbsp;Specific
                    hardscape and plant materials are called
                    out.&nbsp;&nbsp;Depending on the project scope, submittals
                    to the City Planning Department may be required.
                  </DoubleP>
                </Grid>
                <Grid item xs={12} className={classes.subheader} style={{margin:'36px 0 20px 0'}}>
                  construction documents
                </Grid>
                <Grid item xs={12}>
                  <DoubleP>
                    Technical plans and details are drawn to show the contractor
                    how to build the project and to acquire Building Permits and
                    other agency approvals if needed.&nbsp;&nbsp;These drawings
                    may include grading and drainage, irrigation, lighting,
                    layout plans, and detailed sections.
                  </DoubleP>
                  <DoubleP>
                    Bendiga also offers bidding and construction administration
                    services to ensure the project is built according to plan.
                  </DoubleP>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'right', overflowX: 'clip' }}>
              <img src={sideart} className={classes.topPlant} />
            </Grid>
          </Grid>
          <Grid container></Grid>
        </div>
      </div>
    </>
  )
}

export default AboutPage
