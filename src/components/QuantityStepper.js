import React from "react";
import PropTypes from "prop-types";

const QuantityStepper = ({increaseValue,decreaseValue, item}) => {

    return (
    <div>
        <div className="value-button" id="decrease" onClick={() => decreaseValue(item)} value="Decrease Value">-</div>
        <input type="number" id="number" value={item.quantity} readOnly/>
        <div className="value-button" id="increase" onClick={() => increaseValue(item)} value="Increase Value">+</div>
     </div>
    )
}

QuantityStepper.propTypes = {
    increaseValue: PropTypes.func, 
    decreaseValue: PropTypes.func
};

export default QuantityStepper;