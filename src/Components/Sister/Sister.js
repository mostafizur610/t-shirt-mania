import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMOney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMOney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;