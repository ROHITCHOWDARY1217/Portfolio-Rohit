import './Home.css'
const Home = () => {
  return (
    <div className='home-container' id="Home">
    <div className='profile'>
      <img
        className="profile-image"
        src="https://i.ibb.co/R4T8d7qD/Proffessional-profile-photo-of-Rohit-me.jpg"
        alt="Profile of Rohit"
      />
      <div className='profile-text'>
        <h1>Hello,</h1>
        <h2><span className='letter'>I</span><span className='letter'>a</span><span className='letter'>m</span><span> </span><span className='letter'>R</span><span className='letter'>o</span><span className='letter'>h</span><span className='letter'>i</span><span className='letter'>t</span></h2>
        <p className="subtitle">Aspiring Web Developer | Passionate Learner | Problem Solver</p>
      </div>
      </div>
      <div className='main'>
      <div className='profile-description'>
           <h1>Welcome to My Portfolio</h1>
          <p>
            I'm Rohit, a Computer Science student and passionate web developer. I enjoy turning ideas into visually appealing and responsive websites using HTML, CSS, JavaScript, and Tailwind CSS.
          </p>
          <p>
            This portfolio reflects my learning journey, creativity, and commitment to building a strong foundation in frontend development. I'm always exploring new tools, frameworks, and techniques to improve my skills and bring designs to life.
          </p>
          <p>
            Take a look around to know more about me, the skills I’m building, and what I aim to achieve in the tech world.
          </p>
    </div>
      </div>
    </div>
  );
};

export default Home;
