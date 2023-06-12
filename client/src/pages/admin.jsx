import { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className='hero'>
                <h1>Store administration</h1>
            </div>
            <div className='sections'>
                <section className='products'>
                    <h3>Products</h3>

                    <div className='form'>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label' >Title</label>
                                <input onBlur={handleTextChange} name='title' type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label' >Price</label>
                                <input onBlur={handleTextChange} name='price' type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label' >Engine</label>
                                <input onBlur={handleTextChange} name='engine' type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label' >HorsePower</label>
                                <input onBlur={handleTextChange} name='hp' type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label' >Torque</label>
                                <input onBlur={handleTextChange} name='lbft' type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label' >Category</label>
                                <input onBlur={handleTextChange} name='category' type='text' className='form-control' />
                            </div>
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
                                <div className='img-section'>
                                    <img src={product.image} />
                                </div>
                                <div className='title-section'>
                                    <h3>{product.title}</h3>
                                    <span>Price: $ {product.price.toFixed(2)}</span>
                                </div>
                                <div className='info-section'>
                                    <p className='prop'><FontAwesomeIcon className="icon" icon="fa-solid fa-car" /> engine: {product.engine} </p>
                                    <p className='prop'><FontAwesomeIcon className="icon" icon="fa-solid fa-horse-head" /> hp: {product.hp} </p>
                                    <p className='prop'><FontAwesomeIcon className="icon" icon="fa-solid fa-gear" /> lbft: {product.lbft} </p>
                                </div>
                                <div className='delete-section'>
                                    <button className='btn btn-sm btn-danger'><FontAwesomeIcon className='icon' icon={"fa-solid fa-trash"} />Delete</button>

                                </div>
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
                            <div className='coupon-code'>
                                <div className='code'>
                                    <p className='code'>Code: {coupon.code}</p>
                                </div>
                                <div className='discount'>
                                    <p className='discount'>Discount: {coupon.discount.toFixed(2)}%</p>
                                </div>
                                <div className='delete'>
                                    <button className='btn btn-sm btn-danger'><FontAwesomeIcon className='icon' icon={"fa-solid fa-trash"} />Delete</button>
                                </div>
                            </div>
                        )}
                    </ul>
                </section>

            </div>
        </div>
    )
}

export default Admin;