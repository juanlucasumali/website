import { Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import './BoxComponent.css';

interface BoxProps {
  image: string;
  imageWidth?: any;
  imageHeight?: any;
  header?: string;
  subheader?: string;
}

const Header = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  position: 'relative',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
});

const Subheader = styled(Typography)({
  fontSize: '0.8rem',
  position: 'relative',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
});

const Arrow = styled(Typography)({
  position: 'absolute',
  bottom: '0',
  right: '0',
  fontSize: '1.5rem',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
});

const Image = styled(Typography)({
  opacity: 1,
  transition: 'opacity 0.2s ease-in-out',
})


const GridItem = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  boxShadow: '12px 12px 0px 0px #212121',
  border: '6px solid #212121', // customize the border property
  borderRadius: 0, // set borderRadius to 0 to remove rounded corners
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out', // add transitions for the boxShadow and transform properties
  '&:hover': {
    transform: 'translate(12px, 12px)',
    boxShadow: '0px 0px 0px 0px #212121',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    '& .image': {
      opacity: 0.1,
    },
    '& .box-header': {
      opacity: 1,
    },
    '& .box-subheader': {
      opacity: 1,
    },
    '& .box-arrow': {
      opacity: 1,
    },
  },
}));

const BoxComponent = ({ image, imageWidth, imageHeight, header, subheader }: BoxProps) => {
  return (
    <Grid item xs="auto">
      <GridItem raised>
        <Header className="box-header">{header}</Header>
        <Subheader className="box-subheader">{subheader}</Subheader>
        <CardContent className="image-container">
          <Image className='image'>
          <img 
            src={image}
            alt={image}
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              objectFit: 'cover',
            }}
          />
          </Image>
        </CardContent>
        <Arrow className="box-arrow">&gt;</Arrow>
      </GridItem>
    </Grid>
  );
};

export default BoxComponent;