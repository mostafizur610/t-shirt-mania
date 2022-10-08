import React from 'react';
import './Cart.css'


const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy one item!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Buy one for me</h3>
            <p>Buy for yours</p>
            <p><small>Buy for me another one</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }


    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'orange' : 'blue'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}> X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Gift for three</p> : <p>Okay buy more</p>}
            <p>and operator</p>
            {cart.length === 2 && <h2>Double item</h2>}
            <p>Or operator</p>
            {cart.length === 4 || <h2>four items is not</h2>}
        </div >
    );
};

export default Cart;