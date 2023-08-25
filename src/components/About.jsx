import React from 'react';
import { styled } from 'styled-components';
const About = () => {
  return (
    <Wrapper>
      About Page
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: ${({theme})=> theme.colors.bg};
`

export default About
