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

const BoxHeader = styled(Typography)({
  display: 'grid',
  gridTemplateColumns: '1fr auto', // make the first column take up all the remaining space and the second column take up the minimum space required
  alignItems: 'center',
  gap: '8px', // add some spacing between the grid items
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: 1,
  opacity: 0,
  transition: 'opacity 0.01s ease-out',
  '&:hover': {
    opacity: 1,
    transition: 'opacity 0.2s ease-in', }
});

const Header = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2rem',
  margin: '0',
  fontFamily: 'Circular Std Book',
});

const Subheader = styled(Typography)({
  fontSize: '0.8rem',
  margin: '0',
  fontFamily: 'Circular Std Book Italic',
});

const Image = styled(Typography)({
  opacity: 1,
  transition: 'opacity 0.1s ease-in-out',
});


const GridItem = styled(Card)(({ theme }) => ({
  position: 'relative', // add position:relative to the GridItem to make it the containing block for the absolutely positioned BoxHeader
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '12px 12px 0px 0px #212121',
  border: '6px solid #212121',
  borderRadius: 0,
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translate(12px, 12px)',
    boxShadow: '0px 0px 0px 0px #212121',
    '& .image': {
      opacity: 0,
    },
    '& .box-headers': {
      opacity: 1,
    },
  },
}));
const BoxComponent = ({ image, imageWidth, imageHeight, header, subheader }: BoxProps) => {
  return (
    <Grid item xs="auto">
      <GridItem raised>
        <BoxHeader className="box-headers">
          <div>
            <Header className='box-header' >{header}</Header>
            <Subheader className='box-subheader' >{subheader}</Subheader>
          </div>
        </BoxHeader>
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
      </GridItem>
    </Grid>
  );
};

export default BoxComponent;