import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HeaderMenu from './components/HeadNav.jsx';
import Home from './pages/Home.jsx';
import {Link} from 'react-router-dom';
const App= (props) => {
	const [data,setData]=useState('');
	const [foll,setFoll]=useState(false);
    return (
    	<div>
    		<HeaderMenu/>
    		<Link to='/home' element={<Home/>}/>
         </div>
    	)
}
export default App