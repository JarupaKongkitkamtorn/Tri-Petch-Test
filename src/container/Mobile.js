import React from 'react';

//material ui
import Grid from '@mui/material/Grid';

//component
import SlideContent from '../component/SlideContent'

//image
import footballerMobile from '../image/footballer-mobile.svg'
import basketballMobile from '../image/basketball-mobile.svg'

const Mobile = ({ informationATHLETS, informationPLAYERS }) => {
    return (
        <div>
            <Grid container>
                <Grid item container lg={12} sm={12} className='bg-white-mobile'>
                    <Grid item lg={12} sm={12} className='container'>
                        <div className="head-title">{informationATHLETS.title}</div>
                    </Grid>
                    <Grid item container lg={12} sm={12} justifyContent="center" alignItems="center">
                        <div className='relative'>
                            <img src={footballerMobile} alt='footballerMobile' className="image-footballer" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item lg={12} sm={12} className='bg-purple-light'>
                    <Grid item lg={12} sm={12}>
                        <SlideContent information={informationATHLETS} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item container lg={12} sm={12} className='bg-white-mobile-basketball'>
                    <Grid item lg={12} sm={12} className='container'>
                        <div className="head-title">{informationPLAYERS.title}</div>
                    </Grid>
                    <Grid item container lg={12} sm={12} justifyContent="center" alignItems="center">
                        <div className='relative'>
                            <img src={basketballMobile} alt='basketballMobile' className="image-basketball" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item lg={12} sm={12} className='bg-purple-light'>
                    <Grid item lg={12} sm={12}>
                        <SlideContent information={informationPLAYERS} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Mobile;