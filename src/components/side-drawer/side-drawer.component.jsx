import React from "react";
import { scroller } from "react-scroll";

import { Drawer, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 450;

const useStayles = makeStyles((theme) => ({
  drawer: {
    width: 50,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "linear-gradient(45deg, #911a0bf4 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    fontFamily: 'Roboto',
    color: "white",
    height: '100%',
    padding: "0 30px",
    boxShadow: "10px 3px 5px 2px #4bfc06",
  },
}));

const SideDrawer = (props) => {
  const classes = useStayles();

  const links = [
    { where: "featured", value: "Home" },
    { where: "fashion", value: "Fashion Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -90,
    });
    props.onClose(false);
  };

  const renderItem = (item) => (
    <ListItem
      button
      onClick={() => scrollToElement(item.where)}
      key={item.where}
    >
      {item.value}
    </ListItem>
  );

  return (
    <div className={classes.drawer}>
      <Drawer
        anchor={"right"}
        open={props.open}
        onClose={() => props.onClose(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List component="nav">{links.map((item) => renderItem(item))}</List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
