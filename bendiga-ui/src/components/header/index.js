import React, {useState} from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import {Link} from 'react-router-dom'
import {res} from '@mui/material'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import { textAlign } from '@mui/system'
import logo from '../../assets/big-logo.png'
const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    link: {
        marginRight: '24px',
        textDecoration: 'none',
        color: 'black'
    },
    nav: {
        width: '200px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '24px',
        lineHeight: '48px',
        

    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        textAlign: 'left',
        width: '100px',
        fontSize:'13px'
    }
}) 

export const Header = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.container}>
            <Box sx={{
                display: {sm: 'block', md:'none'}
            }}>
                <Button onClick={()=>setOpen(!open)} variant="text"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000000" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg></Button>
            </Box>
            
            <Box sx={{
                display: {xs: 'none', sm: 'none', md:'block'},
                textAlign:'right',
                width: '100%',
                paddingRight: '16px'
            }}>
                
                    Good Steward Landscape Architecture
               
                <div>
                    <Link className={classes.link} to='/about'>about</Link>
                    <Link className={classes.link} to='/process'>process</Link>
                    <Link className={classes.link} to='/work'>work</Link>
                    <Link className={classes.link} to='/reading'>reading</Link>
                    <Link className={classes.link} to='/contact'>contact</Link>
                </div>
                
            </Box>

            <div className={classes.titleContainer}>
                <img src={logo} width="80"></img>
                <div className={classes.title}>
                    Good Steward 
                    Landscape 
                    Architecture
                </div>
                
            </div>            
        
            <Drawer  open={open} onClose={()=>setOpen(false)} >
                <div className={classes.nav}>
                    <Link className={classes.link} to='/about'>about</Link>
                    <Link className={classes.link} to='/process'>process</Link>
                    <Link className={classes.link} to='/work'>work</Link>
                    <Link className={classes.link} to='/reading'>reading</Link>
                    <Link className={classes.link} to='/contact'>contact</Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Header