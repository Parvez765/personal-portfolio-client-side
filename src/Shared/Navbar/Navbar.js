import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assests/logo-01.png"
import "./Navbar.css"

const Navbar = () => {
    let activeStyle = {
        borderBottom:"1px solid red",
        paddingBottom:5
    };
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <img src={logo} alt="" className='logo'/>
                    <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle: undefined}>Home</NavLink>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <img src={logo} alt="" className='logo hidden lg:block'/>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
               <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle: undefined} className="mx-4">Home</NavLink>
               <NavLink>About</NavLink>
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;