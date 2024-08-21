import React from "react";
import {FaGithub} from "react-icons/fa";
import './ProjectsStyles.css'

function Projects() {
    // const button = document.querySelector("div description")
    // console.log(button)
    
    return (
        <div id="list">
            <h1>Projects</h1>
            <div id="box">
                <div classname="project-card">
                    <img classname="proj" src=""></img>
                    <div classname="description">
                        <input id="projButton" type="button" value="Online Auction System"></input>
                        <a href="https://github.com/JuanAracena/OnlineAuctionSystem"><FaGithub size="4em"/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects