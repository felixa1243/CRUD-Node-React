import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  
} from "@material-ui/core";
import {
  BrowserRouter as Router, 
  Link } from "react-router-dom";
import HeadDrawer from './HeadDrawer.jsx';
import NavLink from './NavLink';
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const HeadNav=(props)=>{
  const classes=useStyles()
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return(
    <AppBar position="static">
      <CssBaseline/>
     <Toolbar>
       <Typography variant='h4' className={classes.logo}>Logo</Typography>
       {isMobile?<HeadDrawer/>:<List>
         <ListItem>
           <ListItemText className={classes.navlinks}>
             <Link to="/" className={classes.link}>Home</Link>
           </ListItemText>
         </ListItem>
       </List>}
     </Toolbar>
    </AppBar>
    )
}
export default HeadNav