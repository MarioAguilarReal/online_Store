import Slider from '../components/slider';
import './home.css';
import {Link} from 'react-router-dom'
// import Catalog from './catalog';

const Home = (params)=>{
    return(
        <div className="home">
            <Slider />
            <section className='second-section'>
                <div className='info-section'>
                    <br />
                    <h2>Find the best car with us</h2>
                    <br/>
                    <h4>Low cost</h4>
                    <hr />
                    <h4>Easy papework</h4>
                    <br />
                    <Link className='btn btn-primary' aria-current="page" to="/catalog">More Infomation</Link>
                </div>
                <div className='image-section'>
                    <img src='honda-accord-2023.png' />
                </div>
            </section>
            <section className='third-section'>

            </section>
        </div>
    )
}

export default Home;