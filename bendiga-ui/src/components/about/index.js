import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import jakeImg from '../../assets/me.png'
import beeArt from '../../assets/bee-art.png'
import classNames from 'classnames'
import sideart from '../../assets/about/sideart.png'
import topart from '../../assets/about/topart.png'
import logo from '../../assets/about/logo.png'
const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(194,202,134,.2)',
    fontFamily: 'Montserrat, sans-serif',
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
    borderBottom: 'solid 1px black',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  jake: {
    padding: '8px 8px 0 0',
    width: '400px',
    height: '500px',
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
    height: '60px',
  },
  navItem: {
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    fontStyle: 'italic',
    fontSize: '20px',
    margin: '0 20px',
  },
  paper: {
    maxWidth: '900px',
    padding: '0px 96px 48px 96px',
    margin: '0 auto',
    backgroundColor: 'white',
    textAlign: 'left',
    minHeight: 'calc(100vh - 60px + 200px)',
  },
  logo: {
    position: 'absolute',
    height: '50px',
  },
  topPlant: {
    width: '400px',
    margin: '0 auto',
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
      <div className={classes.logo}>
        <img src={logo} style={{ height: '60px' }} />
      </div>
      <div className={classes.navContainer}>
        <div className={classes.navItem} style={{ marginLeft: '80px' }}>
          home
        </div>
        <div className={classes.navItem}>about </div>
        <div className={classes.navItem}>process</div>
        <div className={classes.navItem}>work</div>
        <div className={classes.navItem}>contact</div>
      </div>
      <div className={classes.container}>
        <div className={classes.paper}>
          <div className={classes.topArtContainer}>
            <img src={topart} className={classes.topPlant} />
          </div>
          <Grid container>
            <Grid item xs={12} className={classes.subheader}>
              bendiga
            </Grid>
            <Grid item xs={12}>
              <p>
                Bendiga provides landscape architectural design to the San
                Francisco Bay Area. The company focuses on connecting people to
                nature through artful, practical and sustainable design.
              </p>
              <p>
                Sustainability calls for using plants suited for California,
                irrigating efficiently, reducing stormwater runoff, and
                respecting the site. California's natural resources are a
                blessing, and we believe in using them responsibly.
              </p>
              <p>
                Taking care of the environment and meeting the needs of people
                and their budget is a creative challenge. By bringing in the
                beauty of our surroundings, dynamic spaces full of life can be
                found by family and creature alike.
              </p>
              <p>Spaces that we can call Home.</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              className={classes.subheader}
              style={{ marginTop: '20px' }}
            >
              jacob mar
            </Grid>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <img src={jakeImg} className={classes.jake} />
                <div style={{ paddingLeft: '24px' }}>
                  <p>
                    A career in landscaping began on a cul-de-sac in Almaden
                    Valley. Jake's parents and neighbors gave him summer jobs
                    taking care of their gardens. Plants, even pulling weeds,
                    always seemed to give Jake a certain calmness.
                  </p>

                  <p>
                    Since then, Jake has graduated with a landscape architecture
                    degree from Cal Poly, SLO, got his license, and worked on
                    parks, trail, and residential projects at design firms
                    around the bay for the past 16 years. He also helped build
                    gardens and worked as a fine gardener, learning valuable
                    skills from properly swinging a pick to creating habitat for
                    the Monarch butterfly.
                  </p>
                  <img className={classes.flowerImage} src={sideart} />
                  <p>
                    Jake is grateful for these experiences and all the people he
                    crossed paths with. They showed him the beauty of God's
                    creation and the peace of knowing Jesus Christ
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default AboutPage
