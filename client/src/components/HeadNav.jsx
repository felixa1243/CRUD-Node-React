import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  BrowserRouter as Router, 
  Link } from "react-router-dom";
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
  return(
    <AppBar position="static">
      <CssBaseline/>
     <Toolbar>
       <Typography variant='h4' className={classes.logo}>Logo</Typography>
     </Toolbar>

    </AppBar>
    )
}
export default HeadNav