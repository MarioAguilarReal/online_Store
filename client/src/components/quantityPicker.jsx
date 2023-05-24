import { useState } from "react";
import "./quantityPicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantityPicker = props => {
    const [quantity, setQuality] = useState(1);

    const handleIncrease = () => {
        setQuality(quantity + 1);
        props.onChange(quantity + 1); //notify the parent component
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuality(quantity - 1);
            props.onChange(quantity - 1); //notify the parent component
        }
    };
    return (
        <div className="qt-picker">
            <button className="bt-minus" onClick={handleDecrease} disabled={quantity === 1}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
            <label>{quantity}</label>
            <button className="bt-plus" onClick={handleIncrease}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
        </div>
    );
}
export default QuantityPicker;