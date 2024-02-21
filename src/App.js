// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Header from "./component/Header";
import Inventory from "./component/Inventory";
import Channel from "./component/Channel";
import Orders from "./component/Orders";
import Shopping from "./component/Shopping";
import Dashbord from "./component/Dashbord";
import Navbar from "./component2/Navbar";
import Footer from "./Footer";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline,IoShareSocialOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";


function App() {
  

  return (
    <Router>
      <div>
        <Header />
        <Navbar />
         <nav className="navigation-bar">
          <NavLink to="/dashbord" className="nav-item" activeClassName="active">
          <AiOutlineDashboard />   Dashboard
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav-item"
            activeClassName="active">
            <IoPricetagOutline />  Inventory
          </NavLink>
          <NavLink to="/channel" className="nav-item" activeClassName="active">
          <IoShareSocialOutline />  Channel
          </NavLink>
          <NavLink to="/orders" className="nav-item" activeClassName="active">
          <CiViewList />  Orders
          </NavLink>
          <NavLink to="/shopping" className="nav-item" activeClassName="active">
          <LiaShippingFastSolid />   Shopping
          </NavLink>
        </nav>
        

        <Routes>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
