import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import logo from '../../assets/home/desktop/logo.png'
const useStyles = createUseStyles({
    title: {
        fontSize: '24px'
    },
    link: {
        fontSize: '16px'
    },
    
})

const Header = () => {
    let classes = useStyles()
    return (
        <Grid container>
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
        
    )
}

export default Header