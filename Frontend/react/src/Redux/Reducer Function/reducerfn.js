 
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


        case "set-cart":
            return{
                ...state,
                cart:{
                    products: action.payload.products || [],
                    totalPrice: action.payload.totalPrice || 0,
                    totalShipping: action.payload.totalShipping || 0
                }
            }



           case "product-add" : 
        let existing = state.cart.products.find(
            (p)=> p.item._id === action.payload.item._id
        );
        
       

        let newProducts;
        if(existing){
            newProducts = state.cart.products.map((p)=>
                p.item._id === action.payload.item._id ? {...p,  qty:p.qty || 1 +1} : p
            )
        }else{
            newProducts = [...state.cart.products,{...action.payload,qty:1}]
        }

        let totalPrice = newProducts.reduce(
            (sum,p)=>sum + p.price * (p.qty || 1),
            cartCount>=3 ? -100 : 0
        );
        let totalShipping = newProducts.reduce(
            (sum , p)=> sum + (p.shipping || 0)
        )
        
         
        default :return state
    }
}


export default reducerfn