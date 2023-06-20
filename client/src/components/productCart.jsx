import './productCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import StoreContext from '../store/storeContext';


const ProductCart = props => {
    let product = props.data;
    let total = (product.price * product.quantity);
    const removeFromCart  = useContext(StoreContext).removeFromCart

    const handleDelete = () => {
        removeFromCart(product._id);
    }
    return (
        <div className='productCart'>
            <div className='img-section'>
                <img src={product.image} />
            </div>
            <div className='title-section'>
                <h3>{product.title}</h3>
                <span>Price: $ {product.price.toFixed(2)}</span>
            </div>
            <div className='info-section'>
                <p className='bed'><FontAwesomeIcon className="icon" icon="fa-solid fa-car" />: {product.engine}</p>
                <p className='bath'><FontAwesomeIcon className="icon" icon="fa-solid fa-horse-head" /> hp: {product.hp}</p>
                <p className='bed'><FontAwesomeIcon className="icon" icon="fa-solid fa-gear" /> lbft: {product.lbft}</p>
            </div>
            <div className='total-delete-section'>
                <p>Quantity:{product.quantity}</p>
                <p>Total:<br/>${total}</p>
                <button className='btn btn-sm btn-danger' onClick={handleDelete}><FontAwesomeIcon className='icon' icon={"fa-solid fa-trash"}/>Delete</button>

            </div>
        </div>
    );
}

export default ProductCart;
