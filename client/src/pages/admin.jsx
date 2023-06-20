import { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataService from "../services/dataService";
import Product from './../components/product';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProduct] = useState([]);

    const [coupon, setCoupons] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    /**
    * useEffect call a load products fn
    * the fn creates an instance of data service
    * uses the instance to retrive the products
    * set the products on the all products state var
    */

    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProduct(prods);

        let coups = await service.getCoupons();
        // console.log(coups)
        setAllCoupons(coups);
    }
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
    const saveProduct = async () => {
        // console.log(product);
        let service = new DataService();
        const savedProduct = await service.saveProduct(product);
        console.log(savedProduct);

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

    //delete coupon
    const handleDeleteCoupon = async (id) => {
        // console.log(id);
        let service = new DataService();
        let response = await service.deleteCoupon(id);
        //
        let copy = allCoupons.filter(c => c._id !== id);
        setAllCoupons(copy)
    }

    const handleDeleteProduct = async id =>{
        let service = new DataService();
        let response = await service.deleteProduct(id);
        console.log(response);
        let copy = allProducts.filter(p => p._id !== id);
        // console
        setAllProduct(copy);
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
                            <li className='info' key={product._id}>
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
                                    <button className='btn btn-sm btn-danger' onClick={()=> handleDeleteProduct(product._id)}><FontAwesomeIcon className='icon' icon={"fa-solid fa-trash"} />Delete</button>

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
                            <div className='coupon-code' key={coupon._id}>
                                <div className='code'>
                                    <p className='code'>Code:<br/> <b>{coupon.code}</b></p>
                                </div>
                                <div className='discount'>
                                    <p className='discount'>Discount: <b>{coupon.discount.toFixed(2)}%</b></p>
                                </div>
                                <div className='delete'>
                                    <button className='btn btn-sm btn-danger' onClick={()=> handleDeleteCoupon(coupon._id)}><FontAwesomeIcon className='icon' icon={"fa-solid fa-trash"} />Delete</button>
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
