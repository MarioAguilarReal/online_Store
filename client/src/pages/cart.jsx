import './cart.css';
import { useContext, useEffect, useState } from "react";
import StoreContext from "../store/storeContext";
import ProductCart from '../components/productCart';
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';

const Cart = (props) => {
    const { cart, getCartCount } = useContext(StoreContext);
    const [couponText, setCouponText] = useState([]);
    const [coupon, setCoupon] = useState(null);
    const [invalidCoupon, setInvalidCoupon] = useState(false);




    const getTotal = () => {
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            let product = cart[i];
            total += (product.quantity * product.price)
        }
        return total;
    }


    const getTotalWithDicount = () => {
        let total = getTotal();

        if(!coupon){
            return total;
        }else{
            const discount = (coupon.discount/100)*total;
            total = total - discount;

            return total.toFixed(2);

        }
    }


    const handleApplyCoupon = async () => {
        const service = new DataService()
        const couponInfo = await service.getCouponByCode(couponText)
        if (couponInfo) {
            setInvalidCoupon(false);
            setCoupon(couponInfo);
        } else {
            setInvalidCoupon(true);
            setCoupon(null);
        }
    }


    const handleCouponText = e => {
        let text = e.target.value
        setCouponText(text)
    }


    if (cart.length === 0) {
        return (
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
                        <h4><b>{getCartCount()}</b> Products on the Cart</h4>
                        <hr />
                        <h4>Total:</h4>
                        <h5>$ {getTotal().toFixed(2)}</h5>
                        <br />
                        <div className='discount'>
                            <label className='form-label'>Apply coupon code:</label>

                            {invalidCoupon ? <label className='error'>Invalid Code</label> : null}

                            <div className='discount-form'>
                                <input className='form-control' type='text' name='code' onBlur={handleCouponText}></input>
                                <button className='btn btn-sm btn-outline-primary' onClick={handleApplyCoupon}>Apply</button>
                            </div>
                        </div>
                        <br />
                        <h4>Final Total:</h4>
                        <h5>${getTotalWithDicount()}</h5>
                        <br />
                        <button className='btn btn-xl btn-success'>Pay Now</button>
                    </aside>

                </div>
            </div>
        );
    }
}

export default Cart;
