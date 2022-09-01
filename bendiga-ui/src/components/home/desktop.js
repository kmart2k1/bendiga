import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/home/desktop/butterfly.png'
import logo from '../../assets/home/desktop/logo.png'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import mobile from 'is-mobile'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'fill',
        backgroundRepeat: 'no-repeat',
        minHeight:'calc(100vh + 66px)',
        position:'relative',
        flexDirection: 'column',
        zIndex: '-1',
    },
    textBlock: {
        display: 'none',
        position:'relative',
        marginTop: '64px',
        color: 'white',
        width: '100%',
        fontSize: '22px',
        fontStyle: 'italic',
        lineHeight:'1.5em',
        fontWeight:'bold',        
        bottom: '120px'
    },
    nav: {
        height:'60px'
    },
    logoContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'absolute',
        top: '0px',
        left: '0px'
    },
    bendigaTitle: {
        fontWeight: '600',
        letterSpacing: '.25em',
        textAlign: 'left',
        fontSize:'12px',
        color:'olive',
    },
    restTitle: {
        textAlign: 'left',
        fontSize:'10px',
        color:'olive',
    },
    authorText: {
        display: 'none',
        fontSize:'12px',
        color:'white',
        width: '100vw',
        position: 'relative',
        bottom: '10px',
        left: '10px',
        textAlign:'left',
        fontStyle: 'italic',
    },
    logo: {
        width: '75px',
        position: 'absolute',
        top: '0px',
        left: '150px',
        zIndex: '10'
    }
}))

const HomePageDesktop = () => {
    const classes = useStyles()
    
    return (
        <>
         <Grid container className={classes.nav}>
            <Grid item xs={3}>
                <img src={logo} className={classes.logo} />
            </Grid>
            <Grid item xs={9}>
                <Grid container>
                    <Grid item xs={12}><span className={classes.title}>Good Steward Landscape Architecture</span></Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent='space-between'>
                            <Grid item><Link className={classes.link} to='/about'>about</Link></Grid>
                            <Grid item><Link className={classes.link} to='/process'>process</Link></Grid>
                            <Grid item><Link className={classes.link} to='/work'>work</Link></Grid>
                            <Grid item><Link className={classes.link} to='/reading'>reading</Link></Grid>
                            <Grid item><Link className={classes.link} to='/home'>contact</Link></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
            
            <div className={classes.container} >
            <div className={classes.textBlock}>
             I started as a tiny egg,<br/>
             upon a leaf of green ...
                
            </div>
            <div className={classes.authorText}>
                photograph<br/>
                by Aaron Burdon
            </div>
        </div>
        </>
       
    )
}

export default HomePageDesktop