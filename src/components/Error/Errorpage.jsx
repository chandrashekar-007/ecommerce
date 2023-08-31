import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Button} from '../Styles/Button';

const Errorpage = () => {
  return (
    <Wrapper>
      <div className="container center">
        <div className="error-page">
          <h1>404</h1>
          <h2>OH! You are lost</h2>
          <p>The page you are looking for does not exists</p>
        </div>
        <div className="button">
          <NavLink to='/'>
            <Button>
              Back To Home Page
            </Button>
          </NavLink>
        </div>
      </div>      
    </Wrapper>
  )
}

const Wrapper = styled.section`

.center{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
.container{  
  margin-top:30px;
  max-width: 215rem;
  margin: 25rem auto;

  
  .error-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 1rem;
    
  }
}



`;

export default Errorpage