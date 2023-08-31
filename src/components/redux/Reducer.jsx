
const reducer = (state, action) => {

    switch (action.type) {
        case "API_LOADING":
           return{
            ...state,
            isLoading: true,
           }
        case "SET_DATA":
         const featureData = action.payload.filter((elem)=>{
            return elem.featured === true;
         })

           return{
            ...state,
            products: action.payload,
            featureProducts:featureData
            
           }
        case "API_ERROR":
           return{
            ...state,
            isError: true,
           }
    
        default:
         return{

            ...state,
         }
    }

}

export default reducer
