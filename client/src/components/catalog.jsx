import './catalog.css';
import Product from './product';

const Catalog =()=>{
    return (
        <div className='catalog'>
            <h3>All Properties</h3>
            <div className='products'>
                <Product />
            </div>
        </div>
    );
}

export default Catalog;