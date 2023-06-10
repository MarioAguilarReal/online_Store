import './slider.css';
import SliderItem from './sliderItem';
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Slider = () => {


  const [allProducts, setallProducts] = useState([])

  useEffect(() => {
    let services = new DataService();
    let img = services.getProducts();
    setallProducts(img);
  })


  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div id='sliderItemMain'className="carousel-item active">
          <h1>Welcome to the best Dealer </h1>
          <Link className='btn btn-primary' aria-current="page" to="/catalog">View Complete Catalog</Link>
        </div>
        {allProducts.map(img => <SliderItem data={img} />)}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Slider;