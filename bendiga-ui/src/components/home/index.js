import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import coverImage from '../../assets/cover-image.jpg'
const useStyles = createUseStyles((theme) =>({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 -16px',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        minHeight:'400px',
    },
    textBlock: {
        color: 'white',
        width: '100%',
        fontStyle: 'italic'
    },
    nav: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column'
    },

}))

const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <div className={classes.textBlock}>
                I started as a tiny egg, upon a leaf of green<br/>
                And now I stay upon the leaf, so I will not be seen<br/>
                Soon I'll build a chrysalis, upon a limb up high<br/>
                I'll stay awhile and then come out<br/>
                And be a butterfly
                
            </div>
        </div>
    )
}

export default HomePage