import React from 'react';
// import { styled } from 'styled-components';
import {NavLink} from 'react-router-dom';

const Product = (elem) => {


  const {id , image , name, price , category} = elem;

  return (
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className='caption'>
              {category}
            </figcaption>
          </figure>

          <div className="card-data">
            <h3>{name}</h3>
            <p className="card-data--price">
              {price}
            </p>
          </div>
        </div>
      </NavLink>
  )
}



export default Product
