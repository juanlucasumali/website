import "./Home.css"

const Home: React.FC = () => {
    return (
      <div>
  
        <div className="background">
          <div className="orbits">
            <div className="outer-orbit"></div>
            <div className="inner-orbit"></div>
          </div>
          <div className='saturn'>
            <div className='saturn-body'></div>
            <div className='saturn-rings'></div>
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
        </div>

        <div className="socials">
            <div className="linkedin"></div>
            <div className="github"></div>
            <div className="instagram"></div>
        </div>
  
      </div>
    );
  };
  
  export default Home;