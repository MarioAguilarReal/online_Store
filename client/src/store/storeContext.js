import { createContext } from "react";

/*
*Context is a description of the data
*Interface / Plan / BluePrint 
It should not have any implementations
*/

const StoreContext = createContext({
    cart: [],
    user : {},
    addToCart: ()=>{},
    removeFromCart: ()=>{},
    getCartCount: ()=>{},
});
export default StoreContext;