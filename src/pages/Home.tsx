import "./Home.css"
import { ReactComponent as Linkedin } from '../media/linkedin.svg';
import { ReactComponent as Github } from '../media/github.svg';
import { ReactComponent as Instagram } from '../media/instagram.svg';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {
    return (
      <div className="home-page">
  
        {/* turn this into an adobe svg thingie */}
        <div className="background">
          <div className="orbits">
            <div className="outer-orbit"></div>
            <div className="inner-orbit"></div>
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
          i’m juan lucas
            <TypeAnimation 
              sequence={[
                2000,
                ", a computer science major @ uc berkeley",
                1000, 
                ", an enthusiast for the arts", 
                1000, 
                ", a proud pinoy 🇵🇭", 
                1000, 
                " — let me know who you are below ;)",
              ]}
              cursor={true}
              deletionSpeed={90}
            />
          </h2>
          {/* TODO: Include resume pdf thing */}
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