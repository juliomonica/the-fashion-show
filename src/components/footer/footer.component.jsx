import React from "react";
import { Fade } from "react-awesome-reveal";
import './footer.styles.css';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce delay={500}>
        <div className="font_righteous footer_logo_fashion">The Fashion Show</div>
        <div className="footer_copyright">
          The Fashion Show 2051 | all rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
