import './App.css';
import './index.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Singleproduct from './components/Singleproduct';
import Errorpage from './components/Errorpage';
import Cart from './components/Cart';
import {Globalstyle} from './Globalstyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Globalstyle/>
        <Header/>
        <Routes>
            <Route exact path = '/home' element={<Home/>}/>
            <Route exact path = '/about' element={<About/>}/>
            <Route exact path = '/products/:id' element={<Products/>}/>
            <Route exact path = '/contact' element={<Contact/>}/>
            <Route exact path = '/cart' element={<Cart/>}/>
            <Route exact path = '/singleproduct' element={<Singleproduct/>}/>
            <Route exact path = '*' element={<Errorpage/>}/>

        </Routes>
      </Router>
    </ThemeProvider>  
    </>
  );
};

const theme ={
  colors : {
    heading:"rgba(25,25,29)",
    text:"rgba(29,29,29,.8)",
    white:"#fff",
    black:"#212528",
    helper:"#8490ff",
    bg: "#d3d6d8",
    footer_bg:"#0a1435",
    btn:"rgb(98 84 243)",
    border:"rgba(98,84,243,0.5)",
    hr:"#fff",
    gradient: "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
    shadowSupport:"rgba(0,0,0,0.20) 0px 1px 4px"},

  font:{
    size1:"30px",
    size2:"40px",
    size3:"50px"
  },

  media:{
    mobile:"768px",
    tab:"998px"
  },
  };

export default App;
