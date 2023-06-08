import "./Software.css"
import ExperiencesCard from "../components/ExperiencesCard";
import ProjectsCard from "../components/ProjectsCard";

import { Grid } from '@mui/material';

const experiencesData = [
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

  const projectsData = [
    { image: `/chord_progression_image.png`, header: 'Chord Progression Generator', subheader: 'JavaScript, HTML, CSS', link: 'https://github.com/juanlucasumali/chord-progression-generator-3000', description: `• Developed a chord progression generator that allows users to generate and customize chord progressions for music composition. 
    • Created and deployed the website using HTML, CSS, and JavaScript.`, imageWidth: '100%',  imageHeight: 300 },
    { image: `/ml_python_implementation.png`, header: 'Python Implementation of ML Models', subheader: 'Python', link: 'https://github.com/juanlucasumali/KNN-from-scratch', description: `• Implemented KNN and decision tree machine learning models from scratch using Python.
    • Successfully tested and validated them on an iris species classification dataset.
    • Optimized the models for accuracy and performance through hyperparameter tuning and feature selection.`, imageWidth: '100%',  imageHeight: 250 },
    { image: `/evolving_car_ais.png`, header: 'Neuroevolution Simulation of Self-Driving Car AIs in Unity 3D', subheader: 'C#, Unity 3D, ML-Agents Toolkit', link: '', description: `• Simulated neuroevolution in Unity 3D using C# and Unity ML-Agents toolkit. 
    • Applied a genetic algorithm to 'evolve' population of artificial neural networks assigned to simulated cars.`, imageWidth: '100%',  imageHeight: 200 },
    // add more data objects as needed
  ];

function Software() {
  return (
    <div className="cs-page">
      <div className="experiences">
        {/* have a little introduction here */}
        <div className='experiences-header'>
          <h1> experiences </h1>
        </div>
        <div className="experiences-gallery">
          <Grid container spacing={5}>
            {experiencesData.map((data, index) => (
              <ExperiencesCard key={index} {...data} />
            ))}
          </Grid>
        </div>
      </div>
      <div className="projects"> 
        <div className='projects-header'>
          <h1> projects </h1>
        </div>
        <div className="projects-gallery">
        <Grid container spacing={5}>
            {projectsData.map((data, index) => (
              <ProjectsCard key={index} {...data} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Software;