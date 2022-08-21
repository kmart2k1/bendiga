import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/home/1poem.png'
import logo from '../../assets/home/logoSmall.png'
import Grid from '@mui/material/Grid'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '61px -16px 0 -16px',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
        textAlign: 'left',
        fontSize:'14px',
        color:'olive',
    },
    restTitle: {
        textAlign: 'left',
        fontSize:'12px',
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

const HomePage = () => {
    const classes = useStyles()
    return (
        <>
        <Grid container className={classes.logoContainer}>
            <Grid item>
                <img src={logo} height={62}></img>  
            </Grid>
            <Grid item style={{marginLeft:'-10px'}}>
                <div className={classes.bendigaTitle}>Bendiga</div>
                <div className={classes.restTitle}>good steward </div>
                <div className={classes.restTitle}>landscape architecture</div>
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

export default HomePage