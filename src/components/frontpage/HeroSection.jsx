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
                    <NavLink className='cursor'>
                        <Button>Shop now</Button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        <img src="images/family1.jpg" alt="family-pic" className='hero-img' />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}



const Wrapper = styled.section`
${''/*background-color: rgb(105 104 104 / 6%);*/}

padding: 4rem 15rem;

img {
  min-width: 30rem;
  height: 30rem;
}

.hero-section-data {
  p {
    margin: 1rem 1rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}

.cursor{
    cursor:auto;
}
.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::before {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -4rem;
    z-index: -1;
  }
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: -9%;
    bottom: -4rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
NavLink a.active{
    cursor: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}












`
export default HeroSection