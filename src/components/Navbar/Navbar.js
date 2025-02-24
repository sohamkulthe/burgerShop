import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Box, Button, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material'


function Navbar() {
  return (
    <AppBar position='absolute' sx={{top:'9%', left:'34%', width:'60%'}} className='navbar'>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
            <Box className='navbar-links'>
            <Typography className='navbar-texts' color='black' style={{textDecoration: 'none'}} component={Link} to="/">Home</Typography>
            <Typography className='navbar-texts' color='black' component={Link} to='/burgers'>Burgers</Typography>
            <Typography className='navbar-texts' color='black' component={Link} to="/offers">Offers</Typography>
            <Typography className='navbar-texts' color='black' component={Link} to="/shop">Shop</Typography>
            </Box>
            <Box className="">
                <Button className='bg-light-grey br-left-50 register-btn'  component={Link} to="/register">Register</Button>
                <Button className='bg-light-red br-right-50 login-btn' component={Link} to="/login">Login</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar