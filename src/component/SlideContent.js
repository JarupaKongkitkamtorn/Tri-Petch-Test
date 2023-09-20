import React, { useState, useRef, useEffect } from 'react';

//material ui
import Grid from '@mui/material/Grid';

const delay = 4000;
const SlideContent = ({ information }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === information.data.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {information.data.map((item, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <Grid container>
                            <Grid item lg={12} sm={12} className='container'>
                                <div className='contentslide' >
                                    <div className='flex-center' style={{ marginBottom: "20px" }}>
                                        <div>
                                            <div className='number-id'>{item.id}</div>
                                            <div className='number-id-border' />
                                        </div>
                                        <div className="title" style={{ marginLeft: "10px" }}>{item.title}</div>
                                    </div>
                                    <div className="description">{item.description}</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {information.data.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideContent;