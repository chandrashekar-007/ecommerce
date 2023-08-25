import React from 'react';
import { styled } from 'styled-components';

const Products = () => {
  return (
    <Wrapper>
      This is the product page
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: ${({theme})=> theme.colors.bg};
`

export default Products
