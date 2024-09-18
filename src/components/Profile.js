import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ProfileStyles.css";


function Profile() {
    return (
        <div id="info">
            <h1>Juan Aracena</h1>
            <div id="text">
                <h2>Software Developer</h2>
            </div>
            <div id="portrait"></div>
            
            <div id="icons">
                <a href="https://github.com/JuanAracena"> <FaGithub size="4em"/></a>
                <a href="https://www.linkedin.com/in/juan-aracena-santelises/"> <FaLinkedin size="4em"/></a>
            </div>
            
        </div>
    )
}

export default Profile;