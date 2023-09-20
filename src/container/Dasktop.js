import React from 'react';

//material ui
import Grid from '@mui/material/Grid';

//component
import ContentRight from '../component/ContentRight'
import ContentLeft from '../component/ContentLeft'


const Dasktop = ({ informationATHLETS, informationPLAYERS }) => {
    return (
        <Grid container >
            <Grid item lg={12} sm={12}>
                <ContentRight info={informationATHLETS} />
            </Grid>
            <Grid item lg={12} sm={12}>
                <ContentLeft info={informationPLAYERS} />
            </Grid>
        </Grid>
    );
}

export default Dasktop;