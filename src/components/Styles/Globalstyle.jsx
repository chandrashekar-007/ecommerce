import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  }

html {
  font-size: 62.5%;
  scroll-behavior: smooth; 
  1rem = 10px
  overflow-x: hidden;
}

body {
  
   ${''/*scrollbar-color: rgb(98 84 243);
scrollbar-width: thin;*/}
}

::-webkit-scrollbar {
  width: 3rem;
}

::-webkit-scrollbar-track {
   background-color:  ${({ theme }) => theme.colors.bg};
   border: .9px solid black;
}

::-webkit-scrollbar-thumb {
  
  background: ${({theme})=> theme.colors.purple};
  border: .6rem solid transparent;
  border-radius: 2rem;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.colors.white};
}

h1,
h2,
h3,
h4,
p {
   font-family: "Montserrat", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 800;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4rem;
   font-weight: 500;
   white-space: normal;
  
  }

h3 {
  font-size: 3.5rem;
  font-weight: 300;
}

p{
  font-size: 3.2rem;
}
 button {
  align-items: center;
  display: flex;
  text-align: center;
  border: 1px solid purple;
  border-radius: 5px;
  padding: 15px 30px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.purple};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  margin-top:30px;
  max-width: 250rem;
  margin: 0 auto;
}

.grid {
  padding-top: 45px;
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column{
  grid-template-columns: repeat(3, 1fr);

}

.grid-four-column1 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
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

input, textarea{
    margin: 0 -10rem;
    max-width: 80rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    font-size: 3rem;

}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 3rem;
    cursor: pointer;
    }

$@media (max-width: ${({ theme }) => theme.media.bigtab}) {
    .container {
    max-width: 140rem;
    padding: 0 3.2rem;
  }
  }
@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 100rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
    
    .grid{
      gap: 3.2rem;
    }
    .grid-two-column , .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }
}

`;


