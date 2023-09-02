import React from 'react'
import styled from 'styled-components'

const ProductColors = ({colors}) => {

  return (
    <Wrapper>
        <div className="contain">
            <p>Colors : </p>
            {
                colors.map((elem , index)=>{
                   return(
                    <span key={index}>
                        <button className='color-btn' style={{backgroundColor:elem[index]}}>{elem}</button>
                    </span>
                   ) 
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

font-size:12rem;

.contain{
    display: flex;
    gap: 2rem;
}

`

export default ProductColors