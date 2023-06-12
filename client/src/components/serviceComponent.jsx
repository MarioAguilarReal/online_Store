import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './services.css'
const ServiceComponent = (props)=>{
    const service = props.data;
    return(
        <div className="serviceComponent">
            <FontAwesomeIcon className="icon" icon={service.icon}/>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
        </div>
    );
}
export default ServiceComponent;