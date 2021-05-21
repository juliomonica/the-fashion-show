import React from "react";
import { Zoom } from "react-awesome-reveal";

import icon_calendar from "../../assets/icons/calendar.png";
import icon_location from "../../assets/icons/location.png";

import './fashion-info.styles.css';

const FashionInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="fn_wrapper">
          <Zoom className="fn_item" triggerOnce>
            <div>
              <div className="fn_outer">
                <div className="fn_inner">
                  <div className="fn_icon_square bck_red"></div>
                  <div
                    className="fn_icon"
                    style={{
                      background: `url(${icon_calendar})`,
                    }}
                  ></div>
                  <div className="fn_title">Event Date & Time</div>
                  <div className="fn_desc">May 10 @8:00:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="fn_item" delay={500}>
            <div>
              <div className="fn_outer">
                <div className="fn_inner">
                  <div className="fn_icon_square bck_yellow"></div>
                  <div
                    className="fn_icon"
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  ></div>
                  <div className="fn_title">Event Location</div>
                  <div className="fn_desc">
                  Hollywood, Los Angeles, CA
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default FashionInfo;
