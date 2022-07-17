import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
          <Layout>
          <Switch>
            <Route path='/' element={<Home/>}/>
            <Route path='/app' element={<App/>}/>
          </Switch>
          </Layout>
        </Router>
  </React.StrictMode>
);
