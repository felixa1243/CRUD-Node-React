import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import {Menu} from "@material-ui/icons"
import { Link } from "react-router-dom";

const HeadDrawer=()=>{
  const [openDrawer,setOpenDrawer]=useState(false);

  return (<div>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
      <List>
        <ListItem onClick={()=>setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
    <IconButton onClick={()=>setOpenDrawer(true)}>
      <Menu/>
    </IconButton>
  </div>)
}
export default HeadDrawer