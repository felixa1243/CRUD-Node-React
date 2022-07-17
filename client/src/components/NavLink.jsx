import React from 'react';
import {Link} from 'react-router-dom';
import {
	ListItem,
	List,
	ListItemText,
	makeStyles
} from '@material-ui/core';
export default function NavLink(){
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
	const style=useStyles();
	return (
		<List>
			<ListItem>
				<ListItemText>
					<Link to='/' >Home</Link>
				</ListItemText>
			</ListItem>
		</List>
		)
}