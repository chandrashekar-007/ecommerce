import React from 'react'
import {BsStar,BsStarHalf,BsStarFill} from 'react-icons/bs';
import styled from 'styled-components';

const Stars = ({stars}) => {

    const star = Array.from({length:5},(elem,index)=>{
        return(
            <span key={index}>
            {
                    stars >= index + 1 ? (<BsStarFill className='star-icons'/>):
                    stars >= index + 0.5 ? (<BsStarHalf className='star-icons'/>):
                    (<BsStar className='star-icons'/>)
            }
            </span>
        )
    });

  return (
    <Wrapper>
        {star}
    </Wrapper>
  )
}

const Wrapper = styled.section`

display: flex;
gap: 2rem;

span{
    justify-content: space-around;
    
    .star-icons{
        color: yellow;
        cursor: pointer;
        font-size: 5rem;
        
        &:hover{
            transition: scale(1.1);
        }
    }
}

`

export default Stars