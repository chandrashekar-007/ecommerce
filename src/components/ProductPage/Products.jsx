import React ,{useContext} from 'react';
import ListSection from './ListSection';
import SortedSection from './SortedSection';
import FilterSection from './FilterSection';
import styled from 'styled-components';
import { data } from '../Context/Content';

const Products = () => {

  const { products } = useContext(data);
  

  return (

    <Wrapper>
    <div className="container">
      <div className="grid grid-two-columns">
        <div className="filter">
          <FilterSection products={products}/>
        </div>
        <div className="sort-list">
          <div className="sort">
            <SortedSection products={products}/>
          </div>
          <div className="list">
            <ListSection products={products}/>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>

  )
}

const Wrapper = styled.section`


font-size: 4rem;

.grid-two-columns{
  grid-template-columns: 0.3fr 1fr;
}


`; 

export default Products