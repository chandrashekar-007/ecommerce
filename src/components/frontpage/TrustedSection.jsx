import styled from 'styled-components';

const TrustedSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted by 1000+ Companies</h3>
        <div className="trusted-companies">
          <div className="company">
            <img src="images/adidas.png" alt="trusted-brands"/>
          </div>
          <div className="company">
            <img src="images/amazon.png"
              alt="trusted-brands"/>
          </div>
          <div className="company">
            <img src="images/google.png"
              alt="trusted-brand"/>
          </div>
          <div className="company">
            <img src="images/microsoft.png"
              alt="trusted-brand"/>
          </div>
          <div className="company">
            <img src="images/mitsubhisi.png"
              alt="trusted-brand"/>
          </div>
        </div>
      </div>      
    </Wrapper>
  );
};

const Wrapper = styled.section`

margin-bottom: 8rem;
padding: 8rem 5rem;
background-color: ${({theme})=> theme.colors.bg};

h3{
  padding: 12rem auto;
  text-align: center;
  text-transform: capitalize;
  color: ${({theme})=> theme.colors.text};
  font-weight: bold;  
  font-size: 3rem;
}

img{
  min-width: 6rem;
  height: 6rem;
}

.trusted-companies{
  margin: 8rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.company{
  min-width: 10rem;
  height: 6rem;
}


`



export default TrustedSection