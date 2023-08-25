import { styled } from 'styled-components'

export const Button = styled.button`

    text-decoration: none;
    margin-top: 3rem;
    background-color: 'purple';
    color: rgb(234 34 56);
    padding: 2rem 2.5rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer'
    transition: all 0.5s linear;
    text-size: 2rem;
    width: 100px:
    height: 50px;
    border-radius: 10px; 

    &:hover,
    &:active{
        box-shadow: 0 0.3rem 0.3rem 0 rgba(132 144 255 / 30%);
        box-shadow: ${({theme})=> theme.colors.shadowSupport};
        transform : scale(1);

    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
    }

`;
