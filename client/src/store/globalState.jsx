import StoreContext from "./storeContext";
// import Cart from './../pages/cart';
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUsers] = useState({ id: 1233, name: 'Mario', email: 'mario@mario.com' });

    const addToCart = prod => {
        // console.log(prod)
        let copy = [...cart];

        /**
         * Create a found variable = false
         * a for loop to travel cart 
         * if there is another product with the same _id as product
         * update the quantity of the element in the array 
         * set found to true 
         * 
         * 
         * 
         * at the end of the for loop, if found is false
         * push product into cart
         */
        let found = false;
        for (let i = 0; i <copy.length; i++) {
            let cartProd = copy[i];
            if ( cartProd._id === prod._id){
                found = true;
                cartProd.quantity += prod.quantity;
            }
        }
        if (!found){
            copy.push(prod);
        }
        
        setCart(copy);
        // console.log(cart)
    }
    const removeFromCart = () => {
        console.log('removeFromCart')
    }

    const getCartCount = () => {
        let total = 0;
        /** 
         * 
         * create a for and get a product, console log the product
         * from the product get the quantity, cl
         * add quantity to a running total
         * **/
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            // console.log(prod);
            total += prod.quantity
        }

        return total;
    }
    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            getCartCount: getCartCount
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default GlobalState;