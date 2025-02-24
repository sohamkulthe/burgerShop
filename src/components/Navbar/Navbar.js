import { Button } from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav(()=>({
  top:'7%',
  left:'34%',
  borderRadius: '50px',

}));

const StyledNavLinks = styled.ul(()=>({
  display: 'flex',
  gap: '82px',
  position:'relative',
  left: '4%'
}))

function Navbar() {
  return (
    <StyledNav className='navbar'>
        <StyledNavLinks className='navbar-links'>
          
        <li className='display-flex'><Link  to='/'>Home</Link></li>
        <li className='display-flex'><Link  to='/burgers'><Button color='secondary'>burgers</Button></Link></li>
        <li className='display-flex'><Link  to='/offers'>Offers</Link></li>
        <li className='display-flex'><Link  to='/shop'>Shop</Link></li>
        </StyledNavLinks>
    </StyledNav>
  )
}

export default Navbar