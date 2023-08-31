import React from 'react';
import {NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <HeaderStyle>
        <NavLink className='dark-text' to='/'>
            Shopezee
            <span><img src="images/trolley-pic.ico" alt="img" /></span>
        </NavLink>
    <Navbar/>
    </HeaderStyle>
    </>
  )
}

const HeaderStyle = styled.header`
padding: 0 4.5rem;
height : 11rem;
background-color: ${({theme})=> theme.colors.bg};
display : flex;
justify-content : space-between;
align-items: center;
position : relative;

.dark-text{
  font-size:30px;
  font-style:italic;
}


img{
  width:60px;
  height:40px;
  background-color:${({theme})=> theme.colors.bg};
}

`;
export default Header