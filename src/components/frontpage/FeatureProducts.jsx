import React,{useContext} from 'react'
import styled from 'styled-components';
import { data } from '../Context/Content'
import Product from '../Products/Product';

const FeatureProducts = () => {

    const { isLoading, featureProducts} = useContext(data);

    if(isLoading){
      <div className='text-center'>...Loading</div>
    }

  return (
    <Wrapper>
        <div className="container">
            <div className="intro">
                <h3>Check Now!</h3>
            </div>
            <div className="heading">
                <h2> Feature Services</h2>
            </div>
            <div className="grid grid-three-column">
                {
                    featureProducts.map((elem)=>{
                        return <Product key={elem.id} {...elem}/>;
                    })
                }
            </div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

padding: 5rem 2rem;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 120rem;
}

.text-center{
    display: flex;
    justify-content: center;
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.4);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }

  .caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
}

.card {
  background-color: #fff;
  border-radius: 1rem;
  width: 40rem;
  height: 30rem;

  .card-data {
    padding: 1rem 3rem;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
}
  p{
      
      font-size: 3rem;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }


}
`;



export default FeatureProducts