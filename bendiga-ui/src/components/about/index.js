import React from 'react'
import {createUseStyles, useTheme} from 'react-jss'
import Grid from '@mui/material/Grid'
import jakeImg from '../../assets/me.png'
const useStyles = createUseStyles((theme) =>({
    container: {
        textAlign:'left',
        
    },
    link: {
        marginRight: '24px'
    },
    nav: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column'
    },
    subheader: {
        borderBottom: 'solid 1px black',
        fontSize: '18px'
    },
    jake: {
        width: '100%',
        padding: '8px 8px 0 0'
    },
    jakeText: {
        padding: '8px'
    }
}))

const AboutPage = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.subheader}>
                Bendiga
            </Grid>
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

            <Grid item xs={12} className={classes.subheader} style={{marginTop:'20px'}}>
                Jake Mar
            </Grid>
            <Grid item xs={6}>
                <img src={jakeImg} className={classes.jake}/>
            </Grid>
            <Grid item xs={6} className={classes.jakeText}>
            A career in landscaping began on a
cul-de-sac in Almaden Valley. Jake's
parents and neighbors gave him summer
jobs taking care of their gardens. Plants,
even pulling weeds, always seemed to give
Jake a certain calmness.
            </Grid>
            <Grid item xs={12}>
            <p>
            
            </p>
            <p>
            Since then, Jake has graduated with a landscape
architecture degree from Cal Poly, SLO, got his
license, and worked on parks, trail, and residential
projects at design firms around the bay for the past
16 years. He also helped build gardens and worked
as a fine gardener, learning valuable skills from
properly swinging a pick to creating habitat for the
Monarch butterfly.

            </p>
            <p>
            Jake is grateful for these experiences
and all the people he crossed paths
with. They showed him the beauty of
God's creation and the peace of knowing
Jesus Christ
            </p>
            </Grid>
        </Grid>

    )
}

export default AboutPage