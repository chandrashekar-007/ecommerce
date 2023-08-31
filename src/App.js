import './App.css';
import './index.css';
import axios from 'axios';
import React,{useEffect , useReducer}  from 'react';
import { Routes , Route} from 'react-router-dom'
import Home from './components/frontpage/Home';
import About from './components/About/About';
import Product from './components/Products/Product';
import Contact from './components/Contact/Contact';
import Singleproduct from './components/Products/Singleproduct';
import Errorpage from './components/Error/Errorpage';
import Cart from './components/Products/Cart';
import {Globalstyle} from './components/Styles/Globalstyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/frontpage/Header';
import Footer from './components/frontpage/Footer';
import { data } from './components/Context/Content';
import reducer from './components/redux/Reducer';


function App() {


  //fetching data using axios
  const API= 'https://api.pujakaitem.com/api/products'

    let initialstate = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: []
      };
     
     
      const [state, dispatch] = useReducer(reducer , initialstate);
    
    
      const fetchData = async (url)=>{
        dispatch({type: 'API_LOADING'});
       try {
            const res = await axios.get(url);
	        const products = await res.data;
	        console.log(products)
            dispatch({type:'SET_DATA', payload:products})
        } catch (error) {
            dispatch({type:'API_ERROR'});
        }

      }  

      useEffect(() => {
        fetchData(API);
      }, [])




  
  const title ={
    shop: 'Shopezee Bazaar',
    query:'for any query',
  }
  
  
  return (
    <>
    <data.Provider value={{title, ...state}}>
    <ThemeProvider theme={theme}>
        <Globalstyle/>
        <Header/>
        <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/about' element={<About/>}/>
            <Route exact path = '/product/:id' element={<Product/>}/>
            <Route exact path = '/contact' element={<Contact/>}/>
            <Route exact path = '/cart' element={<Cart/>}/>
            <Route exact path = '/singleproduct' element={<Singleproduct/>}/>
            <Route exact path = '*' element={<Errorpage/>}/>
        </Routes> 
        <Footer/>
    </ThemeProvider>  
    </data.Provider>
    </> 
  );
};

const theme ={
  colors : {
    heading:"rgba(25,25,29)",
    text:"rgba(29,29,29,.8)",
    purple: 'rgba(170,108,205,0.8)',
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
    tab:"998px",
    bigtab:"1400px"
  },
  };

export default App;
export {data}
