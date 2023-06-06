import "./Home.css"
import { ReactComponent as Linkedin } from '../media/linkedin.svg';
import { ReactComponent as Github } from '../media/github.svg';
import { ReactComponent as Instagram } from '../media/instagram.svg';

const Home: React.FC = () => {
    return (
      <div className="home-page">
  
        <div className="background">
          <div className="orbits">
          <svg className='orbits-animator'>
              <ellipse className='outer-orbit-1' cx="0" cy="0" rx="450" ry="325" />
              <ellipse className='inner-orbit-1' cx="0" cy="0" rx="290" ry="175" />
            </svg>
          </div>
          <div className='saturn'>
            <circle className='saturn-body' r="80" />
            <svg className='saturn-ring-animator'>
              <ellipse className='saturn-ring' cx="0" cy="0" rx="300" ry="80" />
            </svg>
          </div>
        </div>
  
        <div className="home-headers">
          <div className='main-header'>
          <h1 className="main-header-emoji">👋🏽</h1>
          <h1 className="main-header-greeting">kamusta!</h1>
          </div>
          <h2 className="sub-header">
            i’m juan lucas, a computer science major @ uc berkeley
          </h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/juanlucasumali/" target="_blank"><Linkedin className="linkedin" /></a>
            <a href="https://github.com/juanlucasumali/" target="_blank"><Github className="github" /></a>
            <a href="https://www.instagram.com/juanlucasumali/" target="_blank"><Instagram className="instagram" /></a>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Home;