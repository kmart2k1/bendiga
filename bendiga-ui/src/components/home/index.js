import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/home/butterfly.jpg'
import logo from '../../assets/home/logo.jpg'
import Grid from '@mui/material/Grid'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '61px -16px 0 -16px',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        minHeight:'100vh',
        position:'relative',
        flexDirection: 'column'
    },
    textBlock: {
        position:'relative',
        marginTop: '64px',
        color: 'white',
        width: '100%',
        fontStyle: 'italic'
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
            <Grid item >
                <div className={classes.bendigaTitle}>Bendiga</div>
                <div className={classes.restTitle}>good steward </div>
                <div className={classes.restTitle}>landscape architecture</div>
            </Grid>
        </Grid>
            
            <div className={classes.container} >
            <div className={classes.textBlock}>
                I started as a tiny egg, upon a leaf of green<br/>
                And now I stay upon the leaf, so I will not be seen<br/>
                Soon I'll build a chrysalis, upon a limb up high<br/>
                I'll stay awhile and then come out<br/>
                And be a butterfly
                
            </div>
        </div>
        </>
       
    )
}

export default HomePage