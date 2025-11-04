import { useState } from 'react';
import './Project.css';

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleProject = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <div className="projects" id="Projects">
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <div className="project-list">
                <div className={`project-item ${expandedProject === 0 ? 'expanded' : ''}`} onClick={() => toggleProject(0)}>
                    <h2>1. TIC TAC TOE</h2>
                    <p className='project-description'>Developed an interactive Tic Tac Toe game allowing two players to play in real-time. Designed a clean and responsive user interface using HTML and CSS. Implemented game logic with JavaScript, including win/draw detection and reset functionality. Ideal for showcasing basic DOM manipulation and logical problem-solving skills.</p>
                    <a href="https://tictactoe18.niat.tech" target="__blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}><button className="view-btn">View Project</button></a>
                </div>
                <div className={`project-item ${expandedProject === 1 ? 'expanded' : ''}`} onClick={() => toggleProject(1)}>
                    <h2>2. COGNIA AI</h2>
                    <p className='project-description'>Cognia AI is a visually appealing AI-themed web application created using the Lovable AI platform. While it doesn't include real AI functionality or API integration, it serves as an excellent UI/UX showcase. The app is designed to look like an intelligent love compatibility tool, highlighting creative layout, smooth animations, and clean responsiveness using Tailwind CSS and basic JavaScript enhancements.</p>
                    <a href="https://gemini-creators-hub.lovable.app/" target="__blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}><button className="view-btn">View Project</button></a>
                </div>
                <div className={`project-item ${expandedProject === 2 ? 'expanded' : ''}`} onClick={() => toggleProject(2)}>
                    <h2>3. TIME ZONE</h2>
                    <p className='project-description'> fully hand-coded project built by me using HTML, CSS, and JavaScript. This app allows users to convert time between different global time zones. I implemented responsive design and real-time functionality using the JavaScript Date and Intl APIs, showcasing my understanding of frontend logic and UI design.</p>
                    <a href="https://timezonerz.niat.tech/" target="__blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}><button className="view-btn">View Project</button></a>
                </div>
                <div className={`project-item ${expandedProject === 3 ? 'expanded' : ''}`} onClick={() => toggleProject(3)}>
                    <h2>4. Web Page</h2>
                    <p className='project-description'>This project is a simple and responsive web page built using HTML, CSS, and Tailwind CSS. It demonstrates the use of modern utility-first CSS design with Tailwind to create a clean and visually appealing layout without writing custom CSS from scratch.</p>
                    <a href="http://digitalexrz.niat.tech" target="__blank" rel="" onClick={(e) => e.stopPropagation()}><button className='view-btn'>View Project</button></a>
                </div>
            </div>
        </div>
    );
}
