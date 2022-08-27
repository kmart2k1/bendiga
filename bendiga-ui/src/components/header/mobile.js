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
        position:'absolute',
        top: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        backgroundColor: 'white',
        height: '60px',
    },
    link: {
        fontSize:'36px',
        textDecoration: 'none',
        color: 'white',
        fontStyle: 'italic',
        lineHeight:'2em',
        fontWeight: 'bold'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '24px',
        lineHeight: '48px',
        zIndex: '20000',
        textAlign: 'center'    

    },
    titleContainer: {
        display: 'none',
        alignItems: 'center'
    },
    title: {
        textAlign: 'left',
        width: '100px',
        fontSize:'13px'
    },
    closeContainer: {
        width: '100vw',
        display:'flex',
        justifyContent: 'right',
        margin: '4px 8px 0 0'
    },
    closeLink: {
        padding: '8px 20px 0 0'
    },
    menuBurger: {
        zIndex:'10000'
    },
    drawerRoot: {
        zIndex: '20000'
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
                {
                    !open &&
                    <Button className={classes.menuBurger} onClick={()=>setOpen(!open)} variant="text"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#555" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg></Button>
                }
                
            </Box>
            <Drawer PaperProps={{sx: {width:'100%', backgroundColor:'#ccd29a'}}} classes={{root: classes.drawerRoot}} anchor='right' open={open} onClose={()=>setOpen(false)} >
                <div className={classes.nav}>
                    <div className={classes.closeContainer}> 
                        <Button className={classes.closeLink} onClick={()=>setOpen(false)}>
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                        </Button>
                    </div>
                    
                    <Link className={classes.link} to='/'>home</Link>
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