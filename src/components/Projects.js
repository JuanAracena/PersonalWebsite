import React from "react";
import {FaGithub} from "react-icons/fa";
import './ProjectsStyles.css'


function Projects() {
    
    return (
    <div id="list">
        <h1>Projects</h1>
        <div id="box">
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