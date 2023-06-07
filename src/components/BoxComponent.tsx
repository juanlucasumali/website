import './BoxComponent.css'
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  //   paddingTop: '100%',  // set the paddingTop to create a fixed aspect ratio of 1:1
  }));

  interface BoxProps {
    image: string; // add the image property to the props object
    imageWidth?: any;
    imageHeight?: any;
  }
  
  const BoxComponent = ({ image, imageWidth, imageHeight}: BoxProps) => {
    return (
      <Grid item xs='auto'>
        <GridItem>
          <div className='image-container'>
          <img src={image} alt={image} style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, objectFit: 'cover'}} />
          </div>
        </GridItem>
      </Grid>
    );
  };

export default BoxComponent;