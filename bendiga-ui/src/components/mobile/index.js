import { Grid } from "@mui/material";
import page from '../../assets/mobile/page.jpg'
const MobilePage = ({}) => {
    return <Grid container>
        <Grid item><img src={page} style={{maxWidth:'100vw'}}/>
            </Grid>
    </Grid> 
    
    
}

export default MobilePage