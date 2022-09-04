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
    },
    menuContainer: {
        position: 'absolute',
        left: '250px',
        top: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '60%'
    },
    linkContainer: {
        width:'150px',
        borderRight: 'solid 1px orange',
        flexWrap: 'nowrap'
    },
    link: {
        fontSize:'24px',
        color: 'white',
        textDecoration: 'none',
        
    },
    titleContainer: {
        width: '100%',
        textAlign: 'left',
        paddingLeft: '38px'
    },
    titleText: {
        fontSize: '24px',
        letterSpacing: '.18em',
        color: '#c2ca86'
    },
    '@media (max-width: 1400px)': {
        menuContainer: {
            left: '250px',
            top: '36px',
        },
        titleContainer: {
            width: '100%',
            textAlign: 'left',
            paddingLeft: '32px'
        },
        titleText: {
            fontSize: '20px',
            letterSpacing: '.18em',
            color: '#c2ca86'
        },
        linkContainer: {
            width:'125px',
            borderRight: 'solid 1px orange',
            flexWrap: 'nowrap'
        },
        link: {
            fontSize:'20px',
            
        },
    },
    '@media (max-width: 1100px)': {
        menuContainer: {
            left: '250px',
            top: '42px',
        },
        titleContainer: {
            width: '100%',
            textAlign: 'left',
            paddingLeft: '26px'
        },
        titleText: {
            fontSize: '16px',
            letterSpacing: '.18em',
            color: '#c2ca86'
        },
        linkContainer: {
            width:'100px',
            borderRight: 'solid 1px orange',
            flexWrap: 'nowrap'
        },
        link: {
            fontSize:'16px',
            
        },
    }

}))

const HomePageDesktop = () => {
    const classes = useStyles()
    
    return (
        <>
            <div className={classes.nav}>
                <div>
                <img src={logo} className={classes.logo} />
                </div>
                <div className={classes.menuContainer}>
                    <div className={classes.titleContainer}>
                        <span className={classes.titleText}>GOOD STEWARD LANDSCAPE ARCHITECTURE</span>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} to='/about'>about</Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} to='/process'>process</Link>
                    </div>
                    <div className={classes.linkContainer}>
                    <Link className={classes.link} to='/work'>work</Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} to='/reading'>reading</Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} to='/home'>contact</Link>
                    </div>
                </div>
            </div>
        
            
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