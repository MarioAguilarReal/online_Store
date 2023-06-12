import Services from '../components/services';
import Slider from '../components/slider';
import './home.css';
import { Link } from 'react-router-dom'
// import Catalog from './catalog';

const Home = (params) => {
    return (
        <div className="home">
            <Slider />
            <section className='second-section'>
                <div className='text-section'>

                    <h2>
                        Text description section
                    </h2>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum."
                    </p>
                </div>
                <aside className='aside-section'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.16557956708!2d-117.15753302463551!3d32.70822757369251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535c89afe2e7%3A0xb1759c2aecbcc473!2sSan%20Diego%20Global%20Knowledge%20University!5e0!3m2!1ses!2smx!4v1686526119913!5m2!1ses!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </aside>
            </section>
            <section className='third-section'>
                <div className='info-section'>
                    <br />
                    <h2>Our services</h2>
                    <br />
                    <Services />
                    <br/>
                </div>
                <div className='image-section'>
                    <img className="car-img" src='honda-accord-2023.png' />
                    <Link className='btn btn-sm' aria-current="page" to="/catalog">Explore Cars</Link>
                </div>
            </section>
            <section className='fourth-section'>
                <h2 className='title-section'>Contact Us</h2>
            </section>
        </div>
    )
}

export default Home;