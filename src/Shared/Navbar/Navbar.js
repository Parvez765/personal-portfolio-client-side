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
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-40">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-64">
                  
                    <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle: undefined}>Home</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-4">Contact</NavLink>
                    <NavLink to="/blog"  style={({ isActive }) => isActive ? activeStyle: undefined} className="mx-4">Blog</NavLink>
                </ul>
                </div>
                <img src={logo} alt="" className='logo hidden lg:block'/>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
               <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle: undefined} className="mx-4">Home</NavLink>
               <NavLink to="/contact"  style={({ isActive }) => isActive ? activeStyle: undefined} className="mx-4">Contact</NavLink>
               <NavLink to="/blog"  style={({ isActive }) => isActive ? activeStyle: undefined} className="mx-4">Blog</NavLink>
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;