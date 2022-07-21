import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import Grid from '@mui/material/Grid'
const useStyles = createUseStyles((theme) =>({
    container: {
        textAlign:'left'
    },
    link: {
        marginRight: '24px'
    },
    nav: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const AboutPage = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
            <p>
            Bendiga provides landscape architectural design to the San Francisco Bay Area. The company focuses on connecting people to nature through artful, practical and sustainable design.
            </p>
            <p>
            Sustainability calls for using plants suited for California, irrigating efficiently, reducing stormwater runoff, and respecting the site. California's natural resources are a blessing, and we believe in using them responsibly.
            </p>
            <p>
            Taking care of the environment and meeting the needs of people and their budget is a creative challenge. By bringing in the beauty of our surroundings, dynamic spaces full of life can be found by family and creature alike.    
            </p>
            <p>
            Spaces that we can call Home.
            </p>        
            </Grid>
        </Grid>

    )
}

export default AboutPage