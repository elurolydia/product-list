import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import imageWaffleMobile from '../assets/images/image-waffle-mobile.jpg';
import { Typography } from '@mui/material';
import AddToCartButton from './AddToCartButton';
import data from '../data';

const DessertCard = () => {
  //put these in a grid

  const list = data.map((element) => {
    return (
      <Box>
        <Box
          sx={{
            // border: '2px solid black',
            width: 'fit-content',
            borderRadius: 5,
            pb: 5,
            position: 'relative',
          }}
        >
          <img
            src={element.image}
            alt=''
            srcset=''
            style={{ borderRadius: 'inherit' }}
          />
          <AddToCartButton />
        </Box>

        <Box>
          <Typography color='hsl(7, 20%, 60%)' fontSize='16px'>
            {element.dishName}
          </Typography>
          <Typography fontWeight='700' fontSize='22px'>
            {element.mixtureName}
          </Typography>
          <Typography
            color='hsl(14, 86%, 42%)'
            fontSize='20px'
            fontWeight='600'
          >
            {element.price}
          </Typography>
        </Box>
      </Box>
    );
  });

  return (
    <Container sx={{ p: 7, width: 'fit-content' }}>
      <Typography variant='h2' fontWeight='bold' sx={{ pb: 6 }}>
        Desserts
      </Typography>{' '}
      {list}
    </Container>
  );
};

export default DessertCard;

// TODO
// * Seperate somethings into components to make this place neat
// * craete the data to map all the details
// * Put these in a grid
