import "./CS.css"
import BoxComponent from "../components/BoxComponent";
import { Grid } from '@mui/material';

const boxData = [
    { header: 'SFCM', subheader: 'Statistics Dashboard', image: '/sfcm_logo.png', imageWidth: '100%',  imageHeight: 150 },
    { header: 'Astics', subheader: 'Check-In UI', image: '/astics_logo.png', imageWidth: '100%',  imageHeight: 150},
    { header: 'CityU', subheader: 'Genetic Analysis', image: '/cityu_logo.png', imageWidth: '100%',  imageHeight: 150},
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