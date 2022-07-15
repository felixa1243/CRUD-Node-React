import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const HeadDrawer=()=>{
  return (<div>
    <Drawer>
      <List>
        <ListItem>
          <ListItemText>
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  </div>)
}
export default HeadDrawer