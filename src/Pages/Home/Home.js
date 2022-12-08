import React from 'react';
import Education from '../../Componets/Education/Education';
import Expertice from '../../Componets/Expertice/Expertice';
import About from '../../Componets/Header/About/About';

import Header from '../../Componets/Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Expertice/>
            <Education/>
           
        </div>
    );
};

export default Home;