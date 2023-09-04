import React,{useState} from 'react'
import styled from 'styled-components'

const AddToCart = ({stock}) => {

    const [quantity, setQuantity] = useState(1)

    const decQuantity = ()=>{
        quantity > stock ? setQuantity(quantity - 1) : quantity
    }
    
    const incQuantity = ()=>{
        quantity < stock ? setQuantity(quantity + 1) : stock
    }

  return (
    <Wrapper className='cart'>
        <div className="minus" onClick={()=> decQuantity}><AiOutlineMinusCircle/></div>
        <div className="quantity">{quantity}</div>
        <div className="plus" onClick={()=> incQuantity}>+</div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

display: flex;
gap: 5rem;
align-items: center;

.cart{
    display: flex;

}
.minus,
.plus{
    font-size: 6rem;
    cursor: pointer;
}


`


export default AddToCart