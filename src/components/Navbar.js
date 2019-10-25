import React,{ useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink 
} from "react-router-dom";
function Navigationbar() {

  const [isSidebarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className='Navbar'>

      <div className="Navbar_navigation">
        <HamburgerButton sidebarState={{isSidebarOpen,setSideBarOpen}}/>
        <SideBar show={isSidebarOpen} sidebarState={{isSidebarOpen,setSideBarOpen}}/>
        <ul>
          <li><NavLink exact  to="/" activeStyle={{color:'rgb(161, 96, 0)'}} >HOME</NavLink ></li>
          <li><NavLink exact  to="/careers" activeStyle={{color:'rgb(161, 96, 0)'}} >CAREERS</NavLink></li>
          <li><NavLink exact  to="/contact-us" activeStyle={{color:'rgb(161, 96, 0)'}}>CONTACT US</NavLink></li>
          <li><NavLink exact  to="/our-office" activeStyle={{color:'rgb(161, 96, 0)'}}>OUR OFFICE</NavLink ></li>
        </ul>
      </div>

    </nav>
  );
}

function HamburgerButton(props){
  return(
    <button className='burger-button' onClick={()=>{
      props.sidebarState.setSideBarOpen(!props.sidebarState.isSidebarOpen)
    }}>
      <div className='burger-line'></div>
      <div className='burger-line'></div>
      <div className='burger-line'></div>
    </button>
  )
}
function SideBar(props){
  let className = props.sidebarState.isSidebarOpen ? 'SideBar open' : 'SideBar';
  let onclick= ()=>{
    props.sidebarState.setSideBarOpen(false);
    };
  return (
    <nav className={className} >
      <div className='SideBar-x' onClick={()=>{
      props.sidebarState.setSideBarOpen(false);
      }}>
        X
      </div>
      <ul>
        <li onClick={onclick}><NavLink to="/">Home</NavLink></li>
        <li onClick={onclick}><NavLink to="/careers">Careers</NavLink></li>
        <li onClick={onclick}><NavLink to="/contact-us">Contact Us</NavLink></li>
        <li onClick={onclick}><NavLink to="/our-office">Our Office</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navigationbar;