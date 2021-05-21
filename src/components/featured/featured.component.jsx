import React from 'react';
import Carrousel from '../carrousel/carrousel.component';
import TimeUntil from '../date-timer/date-timer.component';

import './featured.styles.css';

const Featured = () => {
    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="featured_text">
                <div className="wrapper">
                    New Collection
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured;