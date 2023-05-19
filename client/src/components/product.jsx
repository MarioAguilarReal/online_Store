import './product.css'
import QuantityPicker from './quantityPicker'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Product = (props) => {

    const handleAdd = () => {
        console.log('Add')
    }

    return (
        <div key="" className="product">
            <img src={props.data.image} />
            <h3>{props.data.title}</h3>
            <div className='info'>
                <div className='priceSection'>
                    <p className='price'>Price:<FontAwesomeIcon className='icon' icon="fa-solid fa-dollar-sign" /> {props.data.price.toFixed(2)}</p>

                </div>
                <div className='infoSection'>
                    <p className='bed'><FontAwesomeIcon  className="icon" icon="fa-solid fa-car" />: {props.data.engine}</p>
                    <p className='bath'><FontAwesomeIcon className="icon"  icon="fa-solid fa-horse-head"/> hp: {props.data.hp}</p>
                    <p className='bed'><FontAwesomeIcon  className="icon" icon="fa-solid fa-gear" /> lbft: {props.data.lbft}</p>
                </div>

            </div>

            <QuantityPicker />
                    <p className='price'>Total:<FontAwesomeIcon className='icon' icon="fa-solid fa-dollar-sign" /> {props.data.price.toFixed(2)}</p>

            <button className="bt-addItem" onClick={handleAdd}>
                <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
            </button>
        </div>

    );
}

export default Product;