import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import jakeImg from '../../assets/about/jakephoto.jpg'
import beeArt from '../../assets/bee-art.png'
import classNames from 'classnames'
import sideart from '../../assets/about/sideart.png'
import topart from '../../assets/about/topart.png'
import logo from '../../assets/about/logo.png'
import butterfly from '../../assets/about/butterfly.png'
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

const AboutPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.subheader}
                  style={{ marginTop: '36px', marginBottom: '20px' }}
                >
                  bendiga
                </Grid>
                <Grid item xs={12}>
                  Bendiga provides landscape architectural design to the San
                  Francisco Bay Area.&nbsp;&nbsp;The company focuses on
                  connecting people to nature through artful, practical and
                  sustainable design.
                  <p>
                    Sustainability calls for using plants suited for California,
                    irrigating efficiently, reducing stormwater runoff, and
                    respecting the site.&nbsp;&nbsp;California's natural
                    resources are a blessing, and we believe in using them
                    responsibly.
                  </p>
                  <p>
                    Taking care of the environment and meeting the needs of
                    people and their budget is a creative
                    challenge.&nbsp;&nbsp;By bringing in the beauty of our
                    surroundings, dynamic spaces full of life can be found by
                    family and creature alike.
                  </p>
                  <p>Spaces that we can call Home. </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={classes.subheader}
                  style={{ margin: '12px 0' }}
                >
                  jacob mar
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={4}>
                      <div style={{ padding: '16px 24px 0 0' }}>
                        <img
                          src={jakeImg}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={8}>
                      <p>
                        A career in landscaping began on a cul-de-sac in Almaden
                        Valley.&nbsp;&nbsp;Jake's parents and neighbors gave him
                        summer jobs taking care of their gardens.&nbsp;&nbsp;Plants, even
                        pulling weeds, always seemed to give Jake a certain
                        calmness.
                      </p>

                      <p>
                        Since then, Jake has graduated with a landscape
                        architecture degree from Cal Poly, SLO, got his license,
                        and worked on parks, trail, and residential projects at
                        design firms around the bay.&nbsp;&nbsp;He also helped build gardens and
                        worked as a fine gardener, learning valuable skills from
                        properly swinging a pick to creating habitat for the
                        Monarch butterfly.
                      </p>
                      <p>
                        Jake is grateful for these experiences and all the
                        people he crossed paths with.&nbsp;&nbsp;They showed him
                        the beauty of God's creation and the peace of knowing
                        Jesus Christ.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img src={topart} className={classes.topPlant} />
            </Grid>
          </Grid>
          <Grid container></Grid>
        </div>
      </div>
    </>
  )
}

export default AboutPage
