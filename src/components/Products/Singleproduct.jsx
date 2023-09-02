import React ,{useEffect , useContext} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { data } from '../Context/Content';
import { NavLink } from 'react-router-dom';
import SingleProductImage from './SingleProductImage';
import SingleProductData from './SingleProductData';

const Singleproduct = () => {
  const {id} = useParams();
  const {getSingleProduct, API, isSingleLoading , singleProduct } = useContext(data);

  if(isSingleLoading){
    <div className='text-center'>.....Loading</div>
    }
  
    const {
      id: change,
      name,
      image

    } = singleProduct

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
    //eslint-disable-next-line
  }, [])
  

  return (
    <Wrapper>
      <div className="heading">
        <NavLink to='/'> Home </NavLink> / {name}
      </div>
      <div className="container">
        <div className="gridi grid-two-column">
          <SingleProductImage className='image-center' image = {image}/>
          <SingleProductData singleProduct={singleProduct}/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


.text-center{
  margin:5rem auto;
  display: flex;
  justify-content: center;
}

.heading{
  font-size: 5rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  height: 10vh;
  display: flex;
}

  .container {
    padding: 9rem 0;
  
    .gridi{
      display: grid;
      gap:10rem;

      .image-center{
        display: flex;

      }
    }
  
  
  }

    hr {
      max-width: 100%;
      width: 100%;
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    padding: 0 2.4rem;
  }


`



export default Singleproduct