import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/home/desktop/butterfly2.png'
import logo from '../../assets/home/desktop/logo.png'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import mobile from 'is-mobile'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'90% 50%',
        minHeight:'calc(100vh - 60px)',
        position:'relative',
        zIndex: '-1',
    },
    textBlock: {
        display: 'block',
        position:'absolute',
        bottom: '200px',
        left: '200px',
        color: 'white',
        fontSize: '36px',
        fontStyle: 'italic',
        lineHeight:'1.5em',    
        bottom: '120px'
    },
    nav: {
        height:'80px'
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
        width: '130px',
        position: 'absolute',
        top: '0px',
        left: '30px',
        zIndex: '10'
    },
    menuContainer: {
        position: 'absolute',
        left: '110px',
        top: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '70%'
    },
    linkContainer: {
        width:'150px',
        borderRight: 'solid 1px orange',
        flexWrap: 'nowrap',
        '&:last-child': {
            borderRight: 'none'
        }
    },
    link: {
        fontSize:'24px',
        color: 'white',
        textDecoration: 'none',
        
    },
    titleContainer: {
        width: '100%',
        textAlign: 'left',
        paddingBottom: '20px',
        paddingLeft: '38px'
    },
    titleText: {
        fontSize: '30px',
        letterSpacing: '.18em',
        color: '#c2ca86'
    },
    '@media (max-width: 1400px)': {
        textBlock: {
            display: 'block',
            position:'absolute',
            bottom: '150px',
            left: '150px',
            color: 'white',
            fontSize: '30px',
            fontStyle: 'italic',
            lineHeight:'1.5em',    
            bottom: '120px'
        },
        menuContainer: {
            left: '110px',
            top: '44px',
        },
        titleContainer: {
            width: '100%',
            textAlign: 'left',
            paddingLeft: '32px'
        },
        titleText: {
            fontSize: '24px',
            letterSpacing: '.18em',
            color: '#c2ca86',
            whiteSpace: 'nowrap'
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
            left: '130px',
            top: '54px',
        },
        titleContainer: {
            width: '100%',
            textAlign: 'left',
            paddingBottom: '14px',
            paddingLeft: '26px'
        },
        titleText: {
            fontSize: '20px',
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
    },
    '@media (max-width: 900px)': {
        textBlock: {
            display: 'none'
        }
        
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
                        <span className={classes.titleText}>BENDIGA LANDSCAPE ARCHITECTURE</span>
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
                        <Link className={classes.link} to='/contact'>contact</Link>
                    </div>
                </div>
            </div>
        
            
            <div className={classes.container} >
            <div className={classes.textBlock}>
             I started as a tiny egg,<br/>
             upon a leaf of green ...
            </div>
        </div>
        </>
       
    )
}

export default HomePageDesktop