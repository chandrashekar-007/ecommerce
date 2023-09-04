import React from 'react';
import styled from 'styled-components';
import PriceConverter from './PriceConverter';
import {TbTruckDelivery,TbReplace} from 'react-icons/tb';
import {MdSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';
import Stars from './Stars';
import ProductColors from './ProductColors';
import AddToCart from './AddToCart';

const SingleProductData = ({singleProduct}) => {

    const {
        category,
        company,
        description,
        name,
        price,
        reviews,
        stars,
        stock,
        colors  
      } = singleProduct ;

  return (
    <Wrapper>
      <div className="container">
        <div className="product-name">
          {name}
        </div>
        <div className="product-reviews">
          <p>
          {reviews} customer reviews
          </p>
        </div>
        <div className="product-rating">
          <p>
            <Stars stars={stars} /> 
          </p>
        </div>
        <div className="product-mrp">
          <p>
            <span>MRP</span> : <del><PriceConverter price={price + 1500/100}/></del>
          </p>
        </div>
        <div className="product-deal">
          <p>
            Deal of the Day : <span><PriceConverter price={price}/></span> 
          </p>
        </div>
        <div className="product-description">
          <p>
            {description}
          </p>
        </div>
        <div className="product-services">
          <div className='product-services--icons'>
            <TbTruckDelivery className='icon'/>
            <p className='font'>Fast and Free Delivery</p>
          </div>
          <div className='product-services--icons'>
            <TbReplace className='icon'/>
            <p className='font'> 15 Days Replacement Policy </p>
          </div>
          <div className='product-services--icons'>
            <MdSecurity className='icon'/>
            <p className='font'>Secure Payment and Delivery</p>
          </div>
          <div className='product-services--icons'>
            <GiReceiveMoney className='icon'/>
            <p className='font'>Money back Guarantee</p>
          </div>
        </div>
        <hr />
        <div className="product-category">
          <p> 
            Category : <span>{category}</span>
          </p>
        </div>
        <div className="product-brand">
          <p> 
            Brand : <span>{company}</span>
          </p> 
        </div>
        <div className="product-available">
          <p>
             Availability :  <span>{stock > 0 ? "Available ":"Out of Stock "}</span>
          </p>
        </div>
        <div className="product-colors">
         {stock > 0 && <ProductColors colors={colors}/>}
        </div>
        <div className="add-to-cart">
         <AddToCart stock={stock} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.data`

font-size: 5rem;
padding-left: 3rem;

.container{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;

  .product-name{
    font-size: 4rem;
    text-transform: capitalize;
  }
  .product-rating{
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }
  .product-deal{
    color: rgb(163 0 255 / 80%);
  }

  span{
    text-transform: capitalize;
    font-weight: bolder;
  }

  .product-services{
    margin-top: 4rem;
    display: flex;
    gap: 5rem;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-evenly;

    .product-services--icons{
      align-items: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
    }

    .add-to-cart{
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .font{
      font-size: 2.8rem;
    }

    .icon{
      cursor: pointer;
      z-index: 10;
      height: 8rem;
      width: 1em;
      font-size: 2em;
  }
  }



}







`

export default SingleProductData