import React ,{useContext} from 'react';
import { styled } from 'styled-components';
import { data } from '../../App';

const Contact = () => {

  const context = useContext(data);
  const {title} = context;
  
  return (
    <Wrapper>
        <div className="contact-map">
          <h2>Contact Us {title.query}</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30271.125557998177!2d73.86843400893463!3d18.48860969133859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c020f86e3cc3%3A0xa796d6342ce667e5!2sMarket%20Yard%2C%20Gultekadi%2C%20Pune%2C%20Maharashtra%20411037!5e0!3m2!1sen!2sin!4v1693118895792!5m2!1sen!2sin" width="100%" height="500" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="form">
        <div className="container">
          <form action="https://formspree.io/f/maygovkg" method="POST" className='contact-input'>
              <input type="text" placeholder='Enter username' name='name' autoComplete='off' required/>
              <input type="email" placeholder='Enter your email' name='email' autoComplete='off' required/>
              <textarea name="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
              <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


.contact-map{
  margin-top: 5rem;
  text-align: center;
}
.container{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  margin: 10rem 43rem;
  text-align: center;
}
.form{
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}



h2{
  margin-bottom: 5rem;
}

.contact-input{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin: 0 35rem;

  input,
  textarea{
    border-radius: 2rem;
  }
  input[type="submit"]{
    
    background-color: ${({ theme }) => theme.colors.purple};

    &:hover{
    cursor: pointer;
      transform: scale(.95);     
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      transition: all .4s ease-in-out;
    }


}




`
export default Contact
