import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import imageWaffleMobile from '../assets/images/image-waffle-mobile.jpg';
import {
  Button,
  grid2Classes,
  nativeSelectClasses,
  Typography,
} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import AddToCartButton from './AddToCartButton';

const DessertCard = () => {
  //put these in a grid
  return (
    <Container sx={{ p: 7, width: 'fit-content' }}>
      <Typography variant='h2' fontWeight='bold' sx={{ pb: 6 }}>
        Desserts
      </Typography>{' '}
      {/* This should be grid */}
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
            src={imageWaffleMobile}
            alt=''
            srcset=''
            style={{ borderRadius: 'inherit' }}
          />
          <AddToCartButton />
        </Box>

        <Box>
          <Typography color='hsl(7, 20%, 60%)' fontSize='16px'>
            Waffle
          </Typography>
          <Typography fontWeight='700' fontSize='22px'>
            Waffle with Berries
          </Typography>
          <Typography
            color='hsl(14, 86%, 42%)'
            fontSize='20px'
            fontWeight='600'
          >
            $6.50
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src={imageWaffleMobile} alt='' srcset='' />
        <Box>
          <p>Waffle</p>
          <p>Waffle with Berries</p>
          <p>$6.50</p>
        </Box>
      </Box>
    </Container>
  );
};

export default DessertCard;

// TODO
// * Seperate somethings into components to make this place nativeSelectClasses
// * craete the data to map all the details
// * Put these in a grid
