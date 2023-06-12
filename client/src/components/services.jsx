import './services.css';
import DataService from '../services/dataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceComponent from './serviceComponent';
import { useEffect, useState } from 'react';

const Services = () => {
    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        let data = new DataService();
        let service = data.getServices();
        setAllServices(service);
    })

    return (
        <div className='services'>
            {allServices.map(service => (
                <ServiceComponent key={service.title} data={service}/>
            ))}
        </div>
    );
}

export default Services;