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
                    <p className='price'><FontAwesomeIcon className='icon' icon="fa-solid fa-dollar-sign" /> {props.data.price}/USD</p>
                </div>
                <div className='infoSection'>
                    <p className='bed'><FontAwesomeIcon  className="icon" icon="fa-solid fa-bed" /> {props.data.bed}</p>
                    <p className='bath'><FontAwesomeIcon className="icon"  icon="fa-solid fa-bath"/> {props.data.bath}</p>
                    <p className='bed'><FontAwesomeIcon  className="icon" icon="fa-solid fa-ruler-combined" /> {props.data.sizeArea} m<sup>2</sup></p>
                </div>

            </div>

            <QuantityPicker />

            <button class="bt-addItem" onClick={handleAdd}>
                <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
            </button>
        </div>

    );
}

export default Product;