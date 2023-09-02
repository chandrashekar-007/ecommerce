
const reducer = (state, action) => {

    switch (action.type) {

      case "API_LOADING":
         return{
            ...state,
            isLoading: true,
         }

      case "SET_FETCH_DATA":
         const featureData = action.payload.filter((elem)=>{
            return elem.featured === true;
         })

         return{
            ...state,
            products: action.payload,
            isLoading: false,
            featureProducts:featureData,
            
         }

      case "API_ERROR":
         return{
               ...state,
               isError: true,
               isLoading: false,
         }     
           
      case "SINGLE_API_LOADING":
         return{
               ...state,
               isSingleLoading: true,
         }

      case "SINGLE_API_DATA":
         return{
            ...state,
            singleProduct: action.payload,
            isSingleLoading: false,
            
         }

      case "SINGLE_API_ERROR":
         return{
            ...state,
            isError: true,
            isSingleLoading: false,
         }
    
      default:
         return{

            ...state,
         }
    }

}

export default reducer
