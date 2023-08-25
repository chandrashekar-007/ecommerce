import React from 'react';
import { styled } from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      This is contact form
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: ${({theme})=> theme.colors.bg};
`
export default Contact
