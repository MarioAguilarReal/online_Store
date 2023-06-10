import './cart.css';
import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ProductCart from '../components/productCart';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart, getCartCount } = useContext(StoreContext);
    console.log(cart);


    const getTotal = () => {
        //create a total = 0
        //travel cart, get every product and add to total (proce * quantity)
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            let product = cart[i];
            total += (product.quantity * product.price)
        }
        console.log(total);
        return total;
    }

    if (cart.length === 0) {
        return(
            <div className='no-prod'>
            <h3>Empty cart</h3>
            <h4>Please go to <Link to="/catalog">Catalog</Link> and add some product to your backet</h4>

            </div>
        );
    } else {
        return (
            <div className="cart">
                <div>
                    <h1>You have {getCartCount()} cars on your cart</h1>
                </div>
                <div className='info-cart'>
                    <section className='products'>
                        {cart.map(product => <ProductCart key={product._id} data={product} />)}
                    </section>
                    <aside className='pay'>
                        <h4>Products</h4>
                        <h5>{getCartCount()}</h5>
                        <h4>Total:</h4>
                        <h5>{getTotal().toFixed(2)}</h5>
                        <div className='discount'>
                                <label className='form-label'>Appley coupon code:</label>
                            <div className='discount-form'>
                                <input className='form-control' type='text'></input>
                                <button className='btn btn-sm btn-outline-primary'>Apply</button>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        );
    }
}

export default Cart;