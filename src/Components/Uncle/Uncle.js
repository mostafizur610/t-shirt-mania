import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMOney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Money: {money}</small></p>
        </div>
    );
};

export default Uncle;