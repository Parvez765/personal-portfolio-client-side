import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;