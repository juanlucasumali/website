import { Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import './BoxComponent.css';

interface BoxProps {
  image: string;
  imageWidth?: any;
  imageHeight?: any;
}

const GridItem = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  boxShadow: '-12px 12px 0px 0px #212121',
  border: '6px solid #212121', // customize the border property
  borderRadius: 0, // set borderRadius to 0 to remove rounded corners
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out', // add transitions for the boxShadow and transform properties
  '&:hover': {
    transform: 'translate(-12px, 12px)',
    boxShadow: '0px 0px 0px 0px #212121',
  }
}));

const BoxComponent = ({ image, imageWidth, imageHeight }: BoxProps) => {
  return (
    <Grid item xs="auto">
      <GridItem  raised>
        <CardContent className="image-container">
          <img
            src={image}
            alt={image}
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              objectFit: 'cover',
            }}
          />
        </CardContent>
      </GridItem>
    </Grid>
  );
};

export default BoxComponent;