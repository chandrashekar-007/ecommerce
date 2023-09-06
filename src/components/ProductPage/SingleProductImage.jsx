import React,{useState} from 'react'
import styled from 'styled-components';

const SingleProductImage = ({image = [{url:""}]}) => {
  const [mainImage, setMainImage] = useState(image[0]);

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="sub-images">
            {
            image.map((elem , index)=>{
                return (
                    <div className="small-images">
                      <figure>
                        <img src={elem.url} alt={elem.filename} key={index} onClick={()=> setMainImage(elem)}/>
                      </figure>
                    </div>
                )
              })
            }    
          </div>
          <div className="main-image">
            <img src={mainImage.url} alt={mainImage.filename}  />
          </div>      
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.image`

display: flex;
align-items: center;

font-size: 4rem;
.container{
  display: flex;
  align-items: center;
  
  .grid{
  align-items: center;
}

figure{
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
  }
}
.sub-images{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  img{
    width: 8em;
  }
}
.main-image{
  display: flex;
  align-items: center;
  
  img{
    width: 25em;
  }
}
}

`;


export default SingleProductImage;