import React , {useState} from 'react';
import styled from 'styled-components';
import {PiCheckFatFill} from 'react-icons/pi';

const ProductColors = ({colors}) => {
    const [color, setColor] = useState(colors[0])

  return (
    <Wrapper>
        <div className="contain">
            <p>Colors : </p>
            {
                colors.map((elem , index)=>{
                   return(
                    <span key={index}>
                        <button className= {color === elem ? "color-btn active" : "color-btn"} style={{backgroundColor:elem}} onClick={()=>setColor(elem)}>
                            {color === elem ? <PiCheckFatFill className='check'/> : null}
                        </button>
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
    align-items: center;
}

.color-btn{
    position: relative;
    display: flex;
    gap: 2rem;
    width: 1rem;
    height: 6rem;
    border-radius: 5rem;
    opacity: 0.5;
    cursor : pointer;
}

.active{
    opacity: 2;
    border: 3px solid black;
    
}

.check{
    position: absolute;
    color: #fff;
    font-size: 4rem;
    left: 10px;

}

`

export default ProductColors