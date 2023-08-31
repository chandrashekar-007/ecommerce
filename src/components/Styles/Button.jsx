import { styled } from 'styled-components'

export const Button = styled.button`

    text-decoration: none;
    margin-top: 3rem;
    background-color: ${({theme})=>theme.colors.purple};
    color:  ${({theme})=>theme.colors.white};
    padding: 2rem 2.5rem;
    border: none;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s linear;
    font-size: 3.3rem;
    border-radius: 10px; 

    &:hover,
    &:active{
        box-shadow: 0 1.3rem 1.3rem 0 rgba(132 144 255 / 30%);
        box-shadow: ${({theme})=> theme.colors.shadowSupport};
        transform : scale(0.95);
        cursor: pointer;
        color: ${({theme})=> theme.colors.white};

    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 3.3rem;
    }

`;
