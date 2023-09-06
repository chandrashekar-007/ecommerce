import { styled } from 'styled-components';
import {FaInstagram, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper className='foot'>
      <footer>
        <div className="container">
          <div className="footer-section">
            <div className="grid grid-three-column">
              <div className="footer-1">
                <h3>Shopezee</h3>
                <p>Here you will get the best offers at affordable prices</p>
              </div>
              <div className="footer-2">
                <h3>Get connected with us</h3>
                <div className="footer-2--icons">
                  <div><a href="http://www.linkedin.com/in/chandra-shekar-73a4841aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icons'/></a>
                  </div>
                  <div><a href="http://github.com/chandrashekar-007/" target="_blank" rel="noopener noreferrer"><FaGithub className='icons'/></a>
                  </div>
                  <div><a href="http://www.facebook.com/shekhar.rana.19870510/" target="_blank" rel="noopener noreferrer"><FaFacebook className='icons'/></a>
                  </div>
                  <div><a href="http://www.instagram.com/er.shekhar_rana/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icons'/></a>
                  </div>
                </div>
              </div>
              <div className="footer-3">
                <h3>Contact us</h3>
                <h2><a href='tel: +919350246766'>+91 9350246700</a></h2>
              </div>
            </div>
                <hr/>
            <div className="footer-section--bottom">
              <div className="grid grid-two-column">
                <div>
                  <p>Shopezee @{new Date().getFullYear()} All Rights Reserved</p>
                </div>
                <div>
                  <p>Terms and Conditions Apply</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>        
        </div>        
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`

margin-top: auto;
section,
.sc-pqitP bYjqDD,
.foot{
  position: relative;
  margin-top: 18rem;
}

footer {
    position: relative;
    bottom: 0;
    padding: 6rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h2,h3 {
      color: ${({ theme }) => theme.colors.hr};
      text-align: center;
    }
    p {
      color: ${({ theme }) => theme.colors.white};   
      text-align: center;
    }
    .footer-2,
    .footer-3{
        display: flex;
        flex-direction: column;
        gap: 3rem;

        a{
          color: #fff;
        }
    }
    .footer-2--icons{
      display: flex;
      gap: 3rem;
      justify-content: center;

      .icons{
        color: #fff;
        font-size: 8rem;
        cursor: pointer;
      }
      .icons:hover{
        background-color: #fff;
        color: #000;
      }
  

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-section--bottom {
    padding: 4rem auto;
    display: flex;
    justify-content: center;

}
    hr {
      margin: 5rem 15rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-section--bottom {
      padding-top: 4.8rem;

      .grid{
        padding-top: 1px;
      }
    }
  }

`

export default Footer