import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        borderTop:'solid 1px #e0e0e0',
        padding: '0 16px',
        fontSize:'12px',
        fontStyle:'italic',
        position:'fixed',
        bottom: '0'
    },
    link: {
        marginRight: '24px'
    },
    nav: {
        width: '20vw',
        display: 'flex',
        flexDirection: 'column'
    },
    info: {
        textAlign:'left'
    }
}) 


const Footer = () => {
    const classes = useStyles()
    return(
        <Grid justifyContent='space-between' container classes={{root: classes.container}}>
            <Grid item>
                bendiga landscape architecture 
            </Grid>
            <Grid item>
                <Box className={classes.info}>
                    phone: 408.209.5506<br/>
                    email: jakelarc@gmail.com
                </Box>
                
            </Grid>
        </Grid>
    )
}

export default Footer