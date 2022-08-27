import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/home/mobile/butterfly.png'
import logo from '../../assets/home/mobile/logoBig.png'
import Grid from '@mui/material/Grid'
import mobile from 'is-mobile'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '61px -16px 0 -16px',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '-50px',
        minHeight:'calc(100vh + 66px)',
        position:'relative',
        flexDirection: 'column',
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
        width: '200px',
        display: 'flex',
        flexDirection: 'column'
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
    }
}))

const HomePageMobile = () => {
    const classes = useStyles()
    
    return (
        <>
        
            
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

export default HomePageMobile