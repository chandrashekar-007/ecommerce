import React from 'react';
import styled from 'styled-components';
import {FaList} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';

const SortedSection = (products) => {
  return (
    <Wrapper>
      <div className="top-container">
        <div className="first-item">
          <div className="grid-icon">
            <BsGridFill/>
          </div>
          <div className="list-icon">
            <FaList/>
          </div>
        </div>
        <div className="center-item">
          {products.length} products available
        </div>
        <div className="last-item">
          <select className='items'>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Order(a-z)</option>
            <option value="z-a">Order(z-a)</option>
          </select>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

font-size: 4rem;

`;



export default SortedSection
