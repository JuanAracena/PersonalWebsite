import React from "react";
import {FaGithub} from "react-icons/fa";
import './ProjectsStyles.css'
import {useState} from "react"

    
function hiddenDiv(title, descr, github, isVisible, setIsVisible){
    
    return (
        <div id="curtain">
            <h1>{title}</h1>
            <input id="closeButton" type="button" value="Close" onClick={(event) => {
                event.preventDefault();
                setIsVisible(!isVisible);
                //hideCurtainBG();
                
            }}></input>
            <div id="description">
                <p>{descr}</p>
            </div>
            <div id="projImageDiv">
                <img className="projImage" src="" alt=""></img>
            </div>
            <div id="link">
                <a href={github}><FaGithub size="4em"/></a>
            </div>

        </div>
        
    )
}

function Projects() {
    const list = {
        "title" : ["Online Auction System"],
        "descr" : ["Description"],
        "image" : ["Image"],
        "github" : ["https://github.com/JuanAracena/OnlineAuctionSystem"]
    }

    const [isVisible, setIsVisible] = useState(false);

    // const curtainBG = document.getElementsByClassName("curtainBG");
    // const showCurtainBG = () => {
    //     curtainBG[0].classList.add("show");
    // }

    // const hideCurtainBG = () => {
    //     curtainBG[0].classList.remove("show");
    // }
    
    return (
        <React.Fragment>
            <div class="curtainBG"></div>
            <div id="list">
            <h1>Projects</h1>
            <div id="box">
                <div classname="project-card">
                    <img classname="proj" src="" alt=""></img>
                    <div classname="content">
                        <input id="projButton" type="button" value="Online Auction System" onClick={(event) => {event.preventDefault()
                        setIsVisible(!isVisible);
                        //showCurtainBG();
                        }}>
                        {isVisible ? console.log("Show content") : console.log("Hide content")}
                        </input>
                        {isVisible && (
                            hiddenDiv(list.title[0], list.descr[0], list.github[0], isVisible, setIsVisible)
                        )}
                        
                            
                    </div>
                </div>
                
            </div>
        </div>
        </React.Fragment>
        
    )
}

export default Projects