import React from 'react';

//material ui
import Grid from '@mui/material/Grid';
import RenderTextLeft from './RenderTextLeft'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//image
import basketballDasktop from '../image/basketball-dasktop.svg'
import basketballTablet from '../image/basketball-tablet.svg'

const ContentLeft = ({ info, key }) => {
    const theme = useTheme();
    const matchesmd = useMediaQuery(theme.breakpoints.down(1200));
    const renderClassname = (id) => {
        switch (id) {
            case "02":
                return "bg-purple-light"
            case "03":
                return "bg-purple-drak"
            default:
                return ""
        }
    }
    return <div key={key}>
        {info.data.map((item, idx) => {
            return <div key={idx} className={renderClassname(item.id)}>
                <Grid container className='container'>
                    <Grid item lg={7} sm={8} sx={{ pr: { sm: "30px", lg: item.id === "01" ? "7%" : "6%" }, pl: { lg: "9%" } }}>
                        {item.id === "01" ? <div>
                            <div className="head-title" style={{ paddingTop: matchesmd ? "51px" : "124px" }}>{info.title}</div>
                            <RenderTextLeft item={item} matchesmd={matchesmd} />
                        </div> : <RenderTextLeft item={item} matchesmd={matchesmd} />}
                    </Grid>
                    <Grid item lg={5} sm={4} />
                </Grid>
            </div>
        })}
        <div className='relative'>
            <img src={matchesmd ? basketballTablet : basketballDasktop} alt={matchesmd ? 'basketballTablet' : 'basketballDasktop'} className='image-basketball' />
        </div>
    </div>
}

export default ContentLeft;