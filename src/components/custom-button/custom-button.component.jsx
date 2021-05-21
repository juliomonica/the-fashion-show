import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../assets/icons/ticket.png';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const MyButton = (props) => {
    const classes = useStyles();
    return(
        <Button 
            className={classes.button}
            href={props.link}
            variant="contained"
            size={ props.size ? props.size:'large'}
            style={{
                background:'#8e8e8e',
                color:'#ffffff',
                ...props.style
            }}
        >    
            { props.iconTicket ?
              <img
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            />
            :null}
          
            {props.text}
        </Button>
    )
}

export default MyButton;
