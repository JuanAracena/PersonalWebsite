import "./MainPageStyles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";


function MainPage() {

    const courseworkList = ["Data Structures and Algorithms", "Discrete Structures I & II", "Computer Architecture", "Design & Analysis of Computer Algorithms", "Software Methodologies", "Data Management for Databases", "Principles of Information and Data Management", "Imaging and Multimedia", "Linear Algebra", "Principles of Programming Languages", "Numerical Analysis Computing", "Systems Programming", "Introduction to Information Security"];
    const [isMenuEnabled, setMenuEnabled] = useState(false);
    const [isMsgEnabled, setMsgEnabled] = useState(false);

    const handleClick = () => {

        if(window.innerWidth < 800) {

            setMenuEnabled(!isMenuEnabled);

            if(!isMenuEnabled === true) {
                document.body.style.overflow = "hidden";
                document.getElementById("menu").style.display = "none";
            } else {
                document.body.style.overflow = "auto";
                document.getElementById("menu").style.display = "";
            }

        }
            
        console.log("Menu opened");

    }

    const openMsg = (event) => {
        event.preventDefault();
        setMsgEnabled(!isMsgEnabled);
        console.log("Mail view opened");
    }

    const form = useRef();

    const sendMail = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_8lpbbu5",
            "template_ooh0yfc",
            form.current,
            "JJRYDm1abHL4DfvqO"
        )
        .then((result) => {
            console.log('Email sent:', result.text);
            alert('Message sent!');
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
            alert('Something went wrong.');
        });


        console.log("Message sent");

        setMsgEnabled(!isMsgEnabled);
        document.body.style.overflow = "";
    };

    return (
        <div id="bg">
            <section id="navbar">
                <h1 id="initials">JA</h1>
                <button id="menu" onClick={handleClick} class="active">{<RxHamburgerMenu id="menu_icon" />}</button>
            </section>

            <section id="large_menu_section">
                <div id="large_menu_div">
                    <a href="#about_me" id="about_option" onClick={handleClick}>About Me</a>
                    <a href="#projects" id="projects_option" onClick={handleClick}>Projects</a>
                    <a href="#contact" id="contact_option" onClick={handleClick}>Contact</a>
                </div>
                
            </section>

            <section id="initial_page">
                <img src="photo.jpg" alt="" id="photo"></img>
                <h2 id="name">Juan Aracena</h2>
                <h3 id="position">Website Developer</h3>
                <p id="intro_paragraph">Proficient in Python, MySQL, and JavaScript programming languages with strong skills in data visualization and storage. For a deeper look at my coding and projects, feel free to explore my GitHub page!</p>
            </section>

            <section id="about_me">
                <h2 id="am_title">About Me</h2>
                <p id="am_paragraph">My name is Juan, and I am a 2024 Computer Science Alumni from Rutgers University. I have a strong interest in website development and data processing. I honed my skills in Data Structures and Algorithms, Design & Analysis of Computer Algorithms, Software Methodologies, Data Management for Databases, Principles of Information and Data Management, and Imaging and Multimedia. I am currently focused on pursuing a career in Website Development. I am adept at processing data and designing intuitive layouts, and I am continuously seeking to improve these skills with projects and certifications. In my free time, I enjoy playing video games, spending time with friends, drawing, and watching TV shows. A fun fact about me is that I love spicy food. I look forward to bringing my passion for website development to new opportunities and challenges as I jumpstart my career.</p>
                
                    
                <section id="courses_section">
                    <h3 id="coursework">Coursework</h3>
                    <ul id="courses_list" type="none">
                        {courseworkList.map((course, index) => {
                            return <li id="course_id" key={index}>{course}</li>
                        })}
                    </ul>
                </section>

                <section id="tech_section">
                    <h3 id="tech">Tech Stack</h3>
                    <ul id="tech_list" type="none">
                        <li id="frontend">Frontend: HTML/CSS, JavaScript, React</li>
                        <li id="backend">Backend: Python, Django, Flask, Java</li>
                        <li id="database">Database: PostgreSQL, MySQL, SQL</li>
                        <li id="apis">APIs: RESTful APIs</li>
                        <li id="host">Hosting Platforms: Vercel</li>
                    </ul>
                </section>

            </section>

            <section id="projects">
                <h2 id="project_title">Projects</h2>

                <section id="project1">
                    <h3 id="project1_title">Online Learning Platform</h3>
                    <p id="project1_tools"><em>Languages and Tools used:</em> Python, Django, JavaScript, React.js, PostgreSQL, Postman, HTML, CSS, Git</p>
                    <p id="project1_descr">I created this online learning platform website as a means to provide users with an accessible way of making learning tools to aid their learning process. Additionally, it serves as a way to learn RESTful API communication, backend implementation, and data processing practices. By creating an account, users can create study tools such as flashcards and exams to facilitate the process of retaining information. I used React and Django to create an intuitive and accessible frontend and a responsive backend respectively to handle user requests. Then, I developed a PostgreSQL database to handle data storage and account authentication. The frontend makes requests to the backend for data and the backend validates the request and gets the data from the database. More developments are yet to come.</p>
                    <p id="project1_link">For more details, check out the source code by clicking <a href="https://github.com/JuanAracena/OnlineLearningPlatform" id="project1_url">here</a></p>
                    
                </section>

                <section id="project2">
                    <h3 id="project2_title">F+V Mix & Load Website</h3>
                    <p id="project2_tools"><em>Languages and Tools used:</em> Python, Django, React, JavaScript, HTML, CSS, Postman, PostgreSQL</p>
                    <p id="project2_descr">I developed this website for the purpose of streamlining the process of classifying fruits and vegetables in refrigerated containers for storage and transport. The frontend of the website takes the common or scientific name of a fruit or vegetable the user provides and access the database to create a list of all the fruits and vegetables that can be mixed and the optimal temperature and relative humidity for transport and storage of that group of products. It considers various parameters to create a container of compatible products, ensuring quality and longer shelf life. Additional updates will follow.</p>
                    <p id="project2_link">For more details, check out the source code by clicking <a href="https://github.com/JuanAracena" id="project2_url">here</a></p>
                    
                </section>

            </section>

            <section id="contact">
                <a id="github_link" href="https://github.com/JuanAracena"><FaGithub id="github_icon"/></a>
                <a id="linkedin_link" href="https://www.linkedin.com/in/juan-aracena-santelises/"> <FaLinkedin id="linkedin_icon"/></a>
                <button id="msg_btn" onClick={openMsg} class="active"><CgMail id="msg_icon"/></button>
            </section>

            {isMenuEnabled === true && (
                <section id="menu_section">
                    <button id="close_btn" onClick={handleClick} class="active"><IoClose id="close_icon"/></button>
                    <a href="#about_me" id="about_option" onClick={handleClick}>About Me</a>
                    <a href="#projects" id="projects_option" onClick={handleClick}>Projects</a>
                    <a href="#contact" id="contact_option" onClick={handleClick}>Contact</a>
                </section>
            )}

            
            {isMsgEnabled === true && (
                <section id="msg_section">
                    <div id="title_div">
                        <h1 id="msg_title">Contact Me</h1>
                        <button id="msg_close_btn" onClick={openMsg} class="active"><IoClose id="msg_close_icon"/></button>
                    </div>
                    <form id="msg_form" ref={form} onSubmit={sendMail}>
                        <label id="msg_name_label" for="name">Name: </label>
                        <input id="msg_name" type="text" name="user_name" placeholder="John Smith" required></input>
                        <label id="msg_email_label" for="email">Email: </label>
                        <input id="msg_email" type="text" name="user_email" placeholder="jsmith@gmail.com" required></input>
                        <textarea id="msg_text" name="message" placeholder="Enter your message..." required></textarea>
                        <button id="submit_btn" type="submit">Submit</button>
                    </form>
                </section>
                
            )}
        </div>
    )
}
export default MainPage;