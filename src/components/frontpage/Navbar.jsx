import React , {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { styled } from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import {CgMenu , CgClose} from "react-icons/cg";

const Navbar = () => {
    
    const [menu, setMenu] = useState(false);

  return (
    <NavbarStyle>
        <div className={menu ? "navbar active": "navbar" }>
            <ul className='navbar-lists'>
                <li>
                    <NavLink className='navbar-link home-link' to='/' onClick={()=>setMenu(false)} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/about' >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/products/:id' >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/contact'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link cart-trolley--link' to='/cart' >
                        <FaShoppingCart className='cart-trolley'/>
                        <span className='cart-total--item'>5</span>
                    </NavLink>
                </li>
            </ul>
            <div className='mobile-navbar-btn'>
                <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=>setMenu(true)} />
                <CgClose name='close-outline' className='close-outline'
                onClick={()=>setMenu(false)} />
                    
            </div>
        </div>
    </NavbarStyle>
  )
}

const NavbarStyle = styled.nav`

    

    .navbar-lists{
        display: flex;
        gap: 4.8rem;
        align-items: center;
        padding-top: 10px;
        
        .navbar-link{
            &:link,
            &:visited{
                font-size: 2.3rem;
                color: #212528;
                transition: color 0.3s linear;
                transition: transform 0.3s linear;
                display: inline-block;
                text-decoration: none;
                font-weight: 600;
                letter-spacing: 2px;
                text-transform: uppercase;
            
            }
                
            &:hover,
            &:active{
                color:${({theme})=> theme.colors.purple};
                transform: translateY(-2px);
            }
        }
    }
    
    .mobile-navbar-btn{
        display: none;
        position: relative;
        background-color: transparent;
        cursor: pointer;
        border: none;

    }

    .mobile-nav-btn[name="close-outline"]{
        display: none;
    }
    

    .cart-trolley--link{
        position: relative;
        
        .cart-trolley{
            position:relative;
            font-size: 3rem;
        }
        
        .cart-total--item{
            width: 2.2rem;
            height: 2.2rem;
            position: absolute;
            background-color: #000;
            color: #000;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: -40%;
            left: 77%;
            background-color: ${({theme})=> theme.colors.helper};
        }
    }

    .user-login--name{
        text-transform: capitalize;
    }

    .user-logout,
    .user-login{
        font-size: 2.5rem;
        padding: 1rem 1.5rem;
    }

    @media (max-width : ${({theme})=>theme.media.mobile}){

            .mobile-navbar-btn{
                display: inline-block;
                position: relative;
                border: ${({theme})=>theme.colors.black};

                
                .mobile-nav-icon{
                    font-size: ${({theme})=>theme.font.size1};
                    color: ${({theme})=>theme.colors.black};
                    z-index: 2;
                    opacity:5;
                }
                .close-outline{
                    display : none;
                }
            }
            
            
            
            .active .mobile-nav-icon{
                display: none;
            }
            
            .active .close-outline{
                display: inline-block;
                position: absolute;
                top:30%;
                right:6%;
                z-index: 999;
                font-size: ${({theme})=>theme.font.size1};
                opacity: 10;
            }
            
            .navbar-lists{
                width: 100vw;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #fff;
                
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-direction: column;
                
                transform: translateX(100%);
                visibility:hidden;
                opacity: 0;
                transition: all 0.5s linear;
            }
            
            .active .navbar-lists{
                visibility: visible;
                opacity: 1;
                transform: translateX(0);
                z-index: 3;
                transform-origin: right;
                transition: all 0.5s linear;
                
                .navbar-link{
                    &:link,
                    &:visited{
                        font-size: 2.5rem;
                        color: ${({theme})=> theme.colors.black};
                        transition: color 0.3s linear;
                        transition: transform 0.3s linear;
                        font-weight: 500;
                    }
                            
                    &:hover,
                    &:active{
                        color:${({theme})=> theme.colors.purple};
                        transform: translateY(-2px);
                    }
                }
                    
                
            }
            
            .cart-trolley--link{
                position: relative;
                
                .cart-trolley{
                    position: relative;
                    font-size: 3rem;
                }
                
                .cart-total--item{
                    width: 2.2rem;
                    height: 2.2rem;
                    position: absolute;
                    color: #ff0;
                    font-size:15px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    top: -37%;
                    left: 83%;
                    ${''/*background-color: #e94141b8;*/}
                    background-color: ${({theme})=> theme.colors.helper};
                }
            }
            
            .user-logout,
            .user-login{
                font-size: 2.5rem;
                padding: 1rem 1.5rem;
            }
        }

    `;

export default Navbar