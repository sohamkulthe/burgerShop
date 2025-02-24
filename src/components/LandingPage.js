import React from 'react';
import LandingPage_burger from '../assets/img/LandingPage_burger.svg';
import BurgerText from '../assets/img/Burger.svg';
import SpicyText from '../assets/img/Spicy.svg';
import { Typography } from '@mui/material';
import Message from './common/Message';


/* Ensure the container takes up the full width of the viewport */
const container = {
    display: 'flex',
    width: '100%',
    height: '100vh', /* Make the container take full height of the viewport */
  }
  
  /* Left section will have a fixed width of 825px */
  const left = {
    flex: '0 0 43%', /* Prevent resizing */
    boxSizing: 'border-box',
    borderTopRightRadius: '60px',
    borderBottomRightRadius: '60px'
  }
  
  /* Right section will take the remaining space */
const right = {
    flex: 1, /* Take remaining space */
    padding: '20px',
    boxSizing: 'border-box',
  }
  

function LandingPage() {
  const price = 7.99; 
  return (
    <div style={container} className='bg-light-cream'>
        <div style={left} className='bg-orange bg-landingpage-text-burger bg-landingpage-text-spicy'>
          <div className='text-spicy-burger'> 
          <img src={SpicyText} alt='SpicyText' className='text-spicy'/>
            <img src={BurgerText} alt='BurgerText' className='text-burger'/>
          </div>
          <Typography color='white' variant='h6'>
            <span className='landing-page-price'>
              <Message id='startingAt' value={price} sx={{textTransform: 'uppercase'}}/>
            </span>
          </Typography>
          <img src={LandingPage_burger} alt='Burger' className='landing-page-burger-image'/>
        </div>
        <div style={right}></div>
    </div>
  )
}

export default LandingPage