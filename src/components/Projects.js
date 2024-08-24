import React from "react";
import {FaGithub} from "react-icons/fa";
import './ProjectsStyles.css'
import {useState} from "react"


function hiddenDiv(title, descr, github, isVisible, setIsVisible){
    
    
    return (
        <div id="curtain">
            <h1>{title}</h1>
            <input id="closeButton" type="button" value="Close" onClick={() => setIsVisible}></input>
            <div id="description">
                <p>{descr}</p>
            </div>
            <div id="link">
                <a href="https://github.com/JuanAracena/OnlineAuctionSystem"><FaGithub size="4em"/></a>
            </div>

        </div>
    )
}

function Projects() {
    // const button = document.querySelector("div description")
    // console.log(button)

    const [isVisible, setIsVisible] = useState("false");
    
    return (
        <div id="list">
            <h1>Projects</h1>
            <div id="box">
                <div classname="project-card">
                    <img classname="proj" src=""></img>
                    <div classname="content">
                        <input id="projButton" type="button" value="Online Auction System" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? console.log("Show content") : console.log("Hide content")}
                        </input>
                        {isVisible && (
                            hiddenDiv("title", "descr", "github", isVisible, setIsVisible(!isVisible))
                        )}     
                            
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects