import React from "react";
import {FaGithub} from "react-icons/fa";
import './ProjectsStyles.css'


function Projects() {
    
    return (
    <div id="list">
        <h1>Projects</h1>
        <div id="box">  
            <div className="project-card">
                <img className="proj" src="urlShortener.jpg" alt=""></img>
                <div className="content">
                    <p className="title">URL Shortener</p>
                    <p className="descr">Website that creates unique URL shorcuts from a given name</p>
                    <a href="https://github.com/JuanAracena/URLShortener"><FaGithub size="4em"/></a>
                </div>
            </div> 
            <div className="project-card">
                <img className="proj" src="OAS.jpg" alt=""></img>
                <div className="content">
                    <p className="title">Online Auction System</p>
                    <p className="descr">Application that allows online auctioning and bidding</p>
                    <a href="https://github.com/JuanAracena/OnlineAuctionSystem"><FaGithub size="4em"/></a>
                </div>
            </div>          
        </div>
    </div>
        
        
    )
}

export default Projects