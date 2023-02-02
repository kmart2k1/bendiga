import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import topart from '../../assets/about/topart.png'
import bird1 from '../../assets/reading/bird1.png'
import bird2 from '../../assets/reading/bird2.png'
import bird3 from '../../assets/reading/bird3.png'
import SecondaryHeader from '../header/secondaryHeader'

const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
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
    marginTop: '12px',
    display:'block',
    textAlign: 'right',
    width: '400px',
  },
  topArtContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const ReadingDetailsPage = () => {
  const classes = useStyles()

  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={8} style={{paddingRight:'12px'}}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.subheader}
                  style={{ marginTop: '36px', marginBottom: '20px' }}
                >
                  hummingbird
                </Grid>
                <Grid item xs={12}>
                    <p style={{marginTop:'0'}}>
                  Most birds that visit our back yards have it easy.&nbsp;&nbsp;Homeowners set up seed and suet feeder along with the occasional bird bath.&nbsp;&nbsp;Food and drink are just a flap and hop away.
                    </p>
                    <p>
                On the other hand(or feather), hummingbirds spend most of their day looking for food.&nbsp;&nbsp;Up, down, side to side, to and fro, hummingbirds exert lots of energy zipping from one flower to another in search for nectar.&nbsp;&nbsp;They like red flowers, a color that bees have trouble seeing.&nbsp;&nbsp;They prefer the tubular kind as well.
                </p>
                <p>
                Hummingbirds have excellent memories and remember every flower they've visited.&nbsp;&nbsp;That's a lot of flowers because the hummingbird needs to consume more than its body weight.&nbsp;&nbsp;And a lot of pollination, thanks to their heads that rub against a flower's stamens and pistils, collecting and depositing pollen at each flowery stop.&nbsp;&nbsp;Though tiny (the average hummingbird weighs less than a nickel), this hard working bird plays a big role in the home garden and landscape at large.
                </p>
                <p>
                Get on their flower memory map and try planting some of these hummingbird favorites:
                </p>
                <p>
                Ribes (Currant), Mimulus (Sticky Monkey flower), Penstemon (Beard Tongue), Antirrhinum (Snapdragon), Salvia (Sage), Zauschneria (CA Fuschia)
                </p>
                <p>
                Fun Facts:
                </p>
                <p>
                Hummingbirds have very weak feet and are rarely ever seen walking about.&nbsp;&nbsp;They are the only bird, though, that can fly backwards, and sometimes upside down!
                </p>
                <p>
                A hummingbird's immune system depends on the pollen proteins found in flower nectar, so it cannot survive on the nectar feeder that we put out.
                </p>
                <span style={{fontStyle:'italic'}}>Information pulled from: Las Pilitas Nursery and other</span>

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img src={bird1} className={classes.topPlant} style={{marginTop:'15px'}} />
              <img src={bird2} className={classes.topPlant} />
              <img src={bird3} className={classes.topPlant} style={{marginTop:'13px', marginBottom:'12px'}} />

            </Grid>
          </Grid>
          <Grid container></Grid>
        </div>
      </div>
    </>
  )
}

export default ReadingDetailsPage
