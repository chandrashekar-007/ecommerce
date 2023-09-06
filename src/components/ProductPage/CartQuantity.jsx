import React,{useState} from 'react';
import styled from 'styled-components';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

const AddToCart = ({stock}) => {

    const [quantity, setQuantity] = useState(1)

    const decQuantity = ()=>{
        return quantity > stock ? setQuantity(quantity - 1) : quantity
    }
    
    const incQuantity = ()=>{
        return quantity < stock ? setQuantity(quantity + 1) : stock
    }

  return (
    <Wrapper className='cart'>
        <div className="minus" onClick={()=> decQuantity()}><AiOutlineMinusCircle className='minus-icon'/></div>
        <div className="quantity">{quantity}</div>
        <div className="plus" onClick={()=> incQuantity()}><AiOutlinePlusCircle className='plus-icon' /></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

display: flex;
gap: 5rem;
align-items: center;

.cart{
    display: flex;
    gap: 5rem;
    align-items: center;

}
.minus,
.plus{
    font-size: 6rem;
    cursor: pointer;
}
.quantity{
    color: ${({theme})=> theme.colors.purple};
}

`


export default AddToCart