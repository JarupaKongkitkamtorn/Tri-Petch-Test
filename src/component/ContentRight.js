import React from 'react';

//material ui
import Grid from '@mui/material/Grid';
import RenderTextRight from './RenderTextRight'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//image
import footballerDasktop from '../image/footballer-dasktop.png'
import footballerTablet from '../image/footballer-tablet.svg'

const ContentRight = ({ info, key }) => {
    const theme = useTheme();
    const matchesmd = useMediaQuery(theme.breakpoints.down(1300));
    const renderClassname = (id) => {
        switch (id) {
            case "02":
                return "bg-purple-light"
            case "03":
                return "bg-purple"
            default:
                return ""
        }
    }
    return <div key={key}>
        {info.data.map(item => {
            return <div className={renderClassname(item.id)}>
                <Grid container className='container'>
                    <Grid item lg={6} sm={4}>
                    </Grid>
                    <Grid item lg={6} sm={8} sx={{ pl: { sm: "20px" } }}>
                        {item.id === "01" ? <div>
                            <div className="head-title">{info.title}</div>
                            <RenderTextRight item={item} matchesmd={matchesmd} />
                        </div> : <RenderTextRight item={item} matchesmd={matchesmd} />}
                    </Grid>
                </Grid>
            </div>
        })}
        <div className='relative'>
            <img src={matchesmd ? footballerTablet : footballerDasktop} alt={matchesmd ? 'footballerTablet' : 'footballerDasktop'} className='image-footballer' />
        </div>
    </div>
}

export default ContentRight;