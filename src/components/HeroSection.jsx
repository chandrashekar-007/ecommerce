import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Button';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h2><i>Shopezee Store</i></h2>
                    <p>Buy your favourite items on exclusive range and get the best offers and deals. Here you can get wide variety of items at reasonable prices</p>
                    <NavLink>
                        <Button>Shop now</Button>
                    </NavLink>
                </div>
                <div className="her-section-image">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`
export default HeroSection