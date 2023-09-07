import React  from 'react';
import styled from 'styled-components';

const ListSection = ({products}) => {

  console.log(products)
  return (
    <Wrapper>
      <div className="list-section">
        <div className="grid grid-three-column">
          {
            products.map((elem,index)=>{
              return(
                <div className="list-items">
                  <figure>
                    <img src={elem.image} alt={elem.category} key={index} />
                  </figure>
                </div>
              )
              
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

font-size: 4rem;

img{
  width: 55rem;
  height: 45rem;
}

`;


export default ListSection