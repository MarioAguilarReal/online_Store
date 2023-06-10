import { Link } from 'react-router-dom';
import './sliderItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SliderItem = (props) => {
    let name = props.data.title;
    let img = props.data.image;
    let engine = props.data.engine;
    let hp = props.data.hp;
    let lbft = props.data.lbft;

    // console.log(img)
    return (

        // <div id='sliderItem' className="carousel-item">
        // </div>
        <div id='sliderItemMain' className="carousel-item ">
            <div className='container-slider'>
                <div className='img-section'>
                    <img className='img-slider' src={img} />
                </div>
                <div className='info-section'>
                    <h1>{name}</h1>
                    <h4><FontAwesomeIcon className="icon" icon="fa-solid fa-horse-head" /> Hp: {hp}</h4>
                    <h4><FontAwesomeIcon className="icon" icon="fa-solid fa-gear" /> Lbft: {lbft}</h4>
                    <h4><FontAwesomeIcon className="icon" icon="fa-solid fa-car" /> Engine: {engine}</h4>
                    <Link className='btn btn-primary' aria-current="page" to="/catalog">More Infomation</Link>
                </div>
            </div>
        </div>

    );
}

export default SliderItem;