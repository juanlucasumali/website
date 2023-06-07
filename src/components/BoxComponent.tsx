import * as React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import './BoxComponent.css';

interface BoxProps {
  image: string;
  imageWidth?: any;
  imageHeight?: any;
  header?: string;
  subheader?: string;
  description: string;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  fontFamily: 'Circular Std Black',
});

const Subheader = styled(Typography)({
  fontSize: '0.8rem',
  margin: '0',
  fontFamily: 'Circular Std Book Italic',
});

const Description = styled(Typography)({
  fontSize: '1rem',
  margin: '0',
  fontFamily: 'Circular Std Book',
});

const Image = styled(Typography)({
  opacity: 1,
  transition: 'opacity 0.1s ease-in-out',
});

interface NewlineTextProps {
  text: string;
}

function NewlineText(props: NewlineTextProps) {
  const text = props.text;
  const newText = text.split('\n').map((str: string) => <p>{str}</p>);

  return <>{newText}</>;
}


const GridItem = styled(Card)(({ theme }) => ({
  position: 'relative', // add position:relative to the GridItem to make it the containing block for the absolutely positioned BoxHeader
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '10px 10px 0px 0px #212121',
  border: '6px solid #212121',
  borderRadius: 0,
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translate(10px, 10px)',
    boxShadow: '0px 0px 0px 0px #212121',
    '& .image': {
      opacity: 0,
    },
    '& .box-headers': {
      opacity: 1,
    },
  },
}));

export default function BoxComponent({ image, imageWidth, imageHeight, header, subheader, description }: BoxProps) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs="auto">
      <Button onClick={handleOpen} disableRipple style={{ backgroundColor: 'transparent' }} >
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
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
          <Header className='box-header' >{header}</Header>
            <Subheader className='box-subheader' >{subheader}</Subheader>
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#ccc' }} />
            <Description className='box-description'>{<NewlineText text={description} />}</Description>
            <Button onClick={handleClose} disableRipple style={{ backgroundColor: '#212121', color: "white", fontWeight:"bold" }}>Done</Button>
          </Box>
        </Fade>
      </Modal>
      
    </Grid>
  );
}