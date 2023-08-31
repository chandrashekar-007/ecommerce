import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { styled } from "styled-components";

const Services = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-four-column1">
                <div className="service-1">
                    <div>
                        <TbTruckDelivery className='icon'/>
                        <h2>Fast and Free delivery</h2>
                    </div>
                </div>
                <div className="service-2">
                  <div>
                    <MdSecurity className='icon'/>
                      <h2>Fast and Protective Shipping</h2>
                  </div>
                </div>
                <div className="service-3">
                  <div>
                    <GiReceiveMoney className='icon'/>
                    <h2>Money back Guarantee</h2>
                  </div>
                </div>
                <div className="service-4">
                    <div>
                        <RiSecurePaymentLine className='icon'/>
                        <h2>Super Secure Payment</h2>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  padding: 7rem 10rem;

  .grid {
    gap: 4.8rem;
  }

  .service-1,
  .service-2,
  .service-3,
  .service-4 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(1, 1, 1, 0.05) 0px 2px 2px 0px;
  }

  .service-1:hover,
  .service-2:hover,
  .service-3:hover,
  .service-4:hover{
    cursor: pointer;
    transform: scale(1.2);
    transition: all .3s linear;

  }
  

  h2 {
    margin-top: 1.4rem;
    font-size: 2.5rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  @media(max-width: ${({theme})=>theme.media.mobile}){
    .grid-four-column1{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

    .service-1,
    .service-2,
    .service-3,
    .service-4 {
      width: 50rem;
      height: 30rem;
      display: flex;
    }
  }
`;


export default Services
