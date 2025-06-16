import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Nav from './Nav/Nav.jsx';
import './App.css';

export default function App() {
    return (
            <div className="app-container">
                <Nav />
                   <Home/>
                  <About/>
                    <Skills/>
                   <Projects/>
                   <Contact/>
                    
                </div>
  
        
    );
}