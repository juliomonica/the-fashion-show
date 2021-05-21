import React,{ useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../custom-button/custom-button.component';

import './discount.styles.css';

const Discount = () => {
    const end = 50;
    const [start,setStart] = useState(0);

    const porcentage = () => {
        if(start < end){
            setStart(prevCount => prevCount+1)
        }   
    }

    useEffect(()=>{
        if( start > 0 && start < 50){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },30)
        }
    },[start])
    

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                 
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            porcentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>  
                </Fade>

                <Slide direction="right">
                    <div className="discount_description">
                        <h3>Purchase ticket before January 2051</h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <MyButton
                            text="Purchase tickets"
                            link="https://google.com"
                            size="large"
                            style={{
                                background:'#000000',
                                color:'#ffffff'
                            }} 
                            iconTicket={true}
                        />                 

                    </div>

                </Slide>

            </div>
        </div>
    )
}

export default Discount;