import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HeaderMenu from './components/HeadNav.jsx';
import Buttons from './components/Button.jsx'
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
const App= (props) => {
	const [data,setData]=useState('');
	const [foll,setFoll]=useState(false);
	// const getData=async (url)=>{
	// 	try{
	// 		let response=await fetch(url)
	// 		response=await response.json()
	// 		setData(response.data)
	// 		console.log(response)
	// 	} catch(err){
	// 		console.log(err)
	// 	}
	// }
	// useEffect(()=>{
	// 	const url='https://jsonplaceholder.typicode.com/posts';
	// 	getData(url);
	// },[data])
    return (
    	<div>
    		<HeaderMenu/>
    		<Router>
    			<Routes>
    				<Route exact='/' components={Home}/>
    			</Routes>
    		</Router>
    	</div>
    	)
}
export default App