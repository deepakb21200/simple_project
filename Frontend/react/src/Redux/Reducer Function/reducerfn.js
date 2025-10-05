 
// import { product_added } from "../Constants/constants.js";
// import initialState from "../InitialState/initialState.js";


// let reducerfn = (state=initialState, action)=>{
//     switch(action.type){
//         case product_added: return{
//             ...state,
//             cart:{
//                 ...state.cart,
//                 productCount: state.cart.productCount + 1
//             }
//         }

//         default :return state
//     }
// }


// export default reducerfn



 
// import { product_added } from "../Constants/constants.js";
import initialState from "../InitialState/initialState.js";


let reducerfn = (state=initialState, action)=>{
    switch(action.type){
        case "set-user":
            return{
                ...state,
                user:{
                    id:action.payload.id,
                    name:action.payload.name,
                    userName:action.payload.userName
                }
            }
         
        default :return state
    }
}


export default reducerfn