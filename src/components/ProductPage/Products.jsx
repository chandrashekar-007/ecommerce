import React ,{useContext} from 'react';
import ListSection from './ListSection';
import SortedSection from './SortedSection';
import FilterSection from './FilterSection';
import styled from 'styled-components';
import { data } from '../Context/Content';

const Products = () => {

  const { products } = useContext(data);
  console.log(products);

  return (

    <Wrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="filter">
          <FilterSection/>
        </div>
        <div className="sort-list">
          <div className="sort">
            <SortedSection products={products}/>
          </div>
          <div className="list">
            <ListSection/>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>

  )
}

const Wrapper = styled.section`


font-size: 4rem;

`; 

export default Products