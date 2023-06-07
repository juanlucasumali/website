import "./CS.css"
import BoxComponent from "../components/BoxComponent";

import { Grid } from '@mui/material';

const boxData = [
    { header: 'SFCM', subheader: 'Statistics Dashboard', description: `• Collaborated with San Francisco Conservatory Of Music (SFCM) to create a dashboard for user statistics aggregation.
    \n• Designed a dashboard with data visualization techniques using React, Node.js, HTML, CSS, and Spectrix API to display yearly statistics on key metrics for user engagement.
    \n• Increased the number of community events attended after dashboard implementation.`, image: '/sfcm_logo.png', imageWidth: '100%',  imageHeight: 150 },
    { header: 'Astics', subheader: 'Check-In UI', description: `• Developed a UI using React, Node, Typescript, and Postgres for 2 hotels with robotic process automation (RPA) and web-scraping.\n
    • Improved check-in efficiency by up to 50%. Deployed on AWS.\n
    • Designed and built the UI with team using unit testing frameworks and code analysis tools.\n
    • UI estimated to have been used by thousands of visitors. Received positive feedback from hotel staff and clients on ease of use and functionality.`, image: '/astics_logo.png', imageWidth: '100%',  imageHeight: 150},
    { header: 'CityU', subheader: 'Genetic Analysis', description: `• Identified shared genes between AIDS and heart disease using Python, Unix, and PASCAL pathwayscoring algorithm to discover potential therapeutic targets for multiple diseases.
    \n• Conducted enrichment analysis on identified shared genes using genetic analysis tools FUMA and FunCoup. Utilized machine learning models to identify important biological pathways and potential therapeutic targets.
    \n• Co-authored a research publication that advanced understanding of AIDS and heart disease etiologies and identified potential therapeutic targets for multiple diseases.`, image: '/cityu_logo.png', imageWidth: '100%',  imageHeight: 150},
    // add more data objects as needed
  ];
function CS() {
  return (
    <div className="cs-page">
      <div className="experiences">
        {/* have a little introduction here */}
        <div className='experiences-header'>
          <h1> experiences </h1>
        </div>
        <div className="experiences-gallery">
          <Grid container spacing={5}>
            {boxData.map((data, index) => (
              <BoxComponent key={index} {...data} />
            ))}
          </Grid>
        </div>
      </div>
      <div className="projects"> 
        <div className='projects-header'>
          <h1> projects </h1>
        </div>
        <div className="projects-gallery">
        </div>
      </div>
    </div>
  );
}

export default CS;