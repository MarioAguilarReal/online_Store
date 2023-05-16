import './product.css'
import properties from '../services/dataService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'

const bath = <FontAwesomeIcon icon={faBath} className='iconInfo' />
const dollar = <FontAwesomeIcon icon={faDollarSign} className='iconInfo' />
const bed = <FontAwesomeIcon icon={faBed} className='iconInfo' />
const area = <FontAwesomeIcon icon={faRulerCombined} className='iconInfo' />


const Product = () => {
    return (
        <div>
            {properties.map(property => (
                <div key={property._id} className="product">
                    <img src={property.image} />
                    <h3>{property.title}</h3>
                    <div className='info'>
                        <div className='priceSection'>
                            <p className='price'>{dollar}<span className='textBold'>{property.price}/USD</span></p>
                        </div>
                        <div className='infoSection'>

                            <p className='bed'>{bed}: <span className='textBold'>{property.bed}</span></p>
                            <p className='bath'>{bath}: <span className='textBold'>{property.bath}</span></p>
                            <p className='area'>{area}: <span className='textBold'>{property.sizeArea} m<sup>2</sup></span></p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default Product;