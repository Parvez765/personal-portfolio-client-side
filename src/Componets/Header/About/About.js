import React from 'react';
import "./About.css"
import gif from "../../../assests/giphy.gif"
import html from "../../../assests/Html.png"
import css from "../../../assests/css.png"
import javaScript from "../../../assests/javascript-logo-transparent-logo-javascript-images-3.png"
import bootstrap from "../../../assests/Bootstrap_logo.svg.png"
import tailwind from "../../../assests/Tailwind_CSS_Logo.svg.png"
import react from "../../../assests/React-icon.svg.png"
import node from "../../../assests/1200px-Node.js_logo.svg.png"
import express from "../../../assests/Expressjs.png"
import mongo from "../../../assests/MongoDB.png"
import firebase from "../../../assests/1_R4c8lHBHuH5qyqOtZb3h-w.png"
import { FaAngellist } from "react-icons/fa";



const About = () => {
    return (
        <div className="hero mt-32 sm:text-center md:text-center lg:text-left">
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
                <img src={gif} className="rounded-lg shadow-2xl mx-10 gifImages"/>
                <div>
                <h1 className="text-5xl font-bold mt-6">Technologies I Love To Use</h1>
                <p className="py-2">PASSIONATE WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <div className='mt-5 text-3xl flex gap-3 logos justify-center'>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={javaScript} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={react} alt="" />
                        <img src={firebase} alt="" />
                    </div>
                    <div className='flex gap-3 logoItem justify-center'>
                        <img src={node} alt="" />
                        <img src={express} alt="" />
                        <img src={mongo} alt="" />
                       
                    </div>
                    <div className='mt-5 flex justify-center items-center gap-3'>
                        <FaAngellist className='text-2xl'></FaAngellist><p><strong>I do ui/ux design for the website that helps website to get a unique look.</strong></p>
                        <FaAngellist className='text-3xl'></FaAngellist><p><strong> I also develop the websites. I create high performance website with blazing fast speed.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;