
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';


const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
       <Route path="/Home" element={<News  key="general"  pageSize={9} country="us" category="general" />} />
      <Route path="/business" element={<News  key="business"  pageSize={9} country="us" category="business" />} />
      <Route path="/entertainment" element={<News  key="entertainment" pageSize={9} country="us" category="entertainment" />} />
      <Route path="/general" element={<News  key="general" pageSize={9} country="us" category="general" />} />
      <Route path="/health" element={<News  key="health" pageSize={9} country="us" category="health" />} />
      <Route path="/science" element={<News  key="science" pageSize={9} country="us" category="science" />} />
      <Route path="/sports" element={<News  key="sports" pageSize={9} country="us" category="sports" />} />
      <Route path="/technology" element={<News key="technology" pageSize={9} country="us" category="technology" />} /> 
    </Route>
  )
);

export default class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}



