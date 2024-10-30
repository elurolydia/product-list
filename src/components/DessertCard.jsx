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
          <Button
            sx={{
              textTransform: 'none',
              position: 'absolute',
              bottom: '20px',
              left: '0',
              right: '0',
              margin: '0 auto',
              width: '200px',
              height: '50px',
              borderRadius: '30px',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: 'inherit',
                height: '50px',
                borderRadius: '30px',
                px: '20px',
              }}
            >
              <SvgIcon>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='20'
                  fill='none'
                  viewBox='0 0 21 20'
                >
                  <g fill='#C73B0F' clip-path='url(#a)'>
                    <path d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z' />
                    <path d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z' />
                  </g>
                  <defs>
                    <clipPath id='a'>
                      <path fill='#fff' d='M.333 0h20v20h-20z' />
                    </clipPath>
                  </defs>
                </svg>
              </SvgIcon>
              <Typography fontWeight='500'>Add to cart</Typography>
            </Paper>
          </Button>
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
