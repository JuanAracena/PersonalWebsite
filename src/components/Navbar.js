import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./NavbarStyles.css";

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [text, setText] = useState("Juan Aracena");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        if(windowWidth <= 576) {
            setText("JA");
        }
        else {
            setText("Juan Aracena")
        }
    }, [windowWidth])

    return (
        <div id="nav">
            <h1><Link to="/">{text}</Link></h1>
            <ul>
                <li id="home">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;