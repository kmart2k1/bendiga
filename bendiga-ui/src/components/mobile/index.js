import { Grid } from "@mui/material";
import leaf from '../../assets/mobile/leaf.jpg'
const MobilePage = ({}) => {
    return <Grid container justifyContent='center' style={{marginTop:'25vh', padding:'24px', color:'#666'}}>
    <Grid item style={{fontFamily: 'Montserrat, sans-serif', fontSize:'18px'}}>
        <img src={leaf} style={{maxWidth:'200px'}}/><br/>
    <span style={{fontSize:'36px', }}>bendiga</span>
    <p>
    ca landscape architect 5699<br/>
    phone: 408.209.5506<br/>
    email: jakelarc@gmail.com

    </p>
    <br/>
    website available<br/> on home computer
    </Grid>
</Grid>
}

export default MobilePage