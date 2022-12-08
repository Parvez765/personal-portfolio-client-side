import React from 'react';
import Expertice from '../../Componets/Expertice/Expertice';
import About from '../../Componets/Header/About/About';

import Header from '../../Componets/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Expertice></Expertice>
            
           
        </div>
    );
};

export default Home;