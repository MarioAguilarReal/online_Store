import { useState } from 'react';
import './admin.css';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProduct] = useState([]);

    const [coupon, setCoupons] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const handleTextChange = (e) => {

        const name = e.target.name;
        let text = e.target.value;
        // console.log(name, text);

        if (name === 'price') {
            text = parseFloat(text);
        }
        /** 
        *Create a copy
        *Modify the copy
        *Set the copy
        **/
        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    const handleTextCouponChange = e => {
        const name = e.target.name;
        let text = e.target.value;
        if (name === 'discount') {
            text = parseFloat(text);
        }
        let copy = { ...coupon };
        copy[name] = text;
        setCoupons(copy);
        // console.log(name, text);
    }

    //save product
    const saveProduct = () => {
        console.log(product);

        //To do : send product to server

        //add product to allProducts array
        let copy = [...allProducts];
        copy.push(product);
        setAllProduct(copy);
    }
    //save coupon
    const saveCoupon = () => {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }


    return (
        <div className='admin'>
            <h1>Store administration</h1>
            <div className='sections'>
                <section className='products'>
                    <h3>Products</h3>

                    <div className='form'>
                        <div className='row'>
                            <label className='form-label' >Title</label>
                            <input onBlur={handleTextChange} name='title' type='text' className='form-control' />
                        </div>
                        <div className='row'>
                            <label className='form-label' >Price</label>
                            <input onBlur={handleTextChange} name='price' type='text' className='form-control' />
                        </div>
                        <div className='row'>
                            <label className='form-label' >Category</label>
                            <input onBlur={handleTextChange} name='category' type='text' className='form-control' />
                        </div>
                        <div className='row'>
                            <label className='form-label' >Image</label>
                            <input onBlur={handleTextChange} name='image' type='text' className='form-control' />
                        </div>
                        <div className='form-buttons'>
                            <button onClick={saveProduct} className='btn btn-primary'>
                                Save Product
                            </button>
                        </div>


                    </div>

                    <ul className='product-list'>
                        {allProducts.map(product =>
                            <li className='info'>
                                <span className='title'>{product.title}</span>
                                <span className='price'>${product.price}</span>
                            </li>
                        )}
                    </ul>
                </section>

                <section className='coupons'>
                    <h3>Coupon code</h3>
                    <div className='form'>
                        <div className='row'>
                            <label className='form-label' >Product name</label>
                            <input onBlur={handleTextCouponChange} name='code' type='text' className='form-control' />
                        </div>
                        <div className='row'>
                            <label className='form-label' >Discount %</label>
                            <input onBlur={handleTextCouponChange} name='discount' type='text' className='form-control' />
                        </div>
                        <div className='form-buttons'>
                            <button onClick={saveCoupon} className='btn btn-primary'>
                                Save Coupon Code
                            </button>
                        </div>

                    </div>
                    <ul className='coupon-list'>
                        {allCoupons.map(coupon =>
                            <li>
                                <span className='code'>{coupon.code}</span>
                                <span className='discount'>${coupon.discount.toFixed(2)}</span>
                            </li>
                        )}
                    </ul>
                </section>

            </div>
        </div>
    )
}

export default Admin;