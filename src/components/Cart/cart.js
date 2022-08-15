import React, {useContext} from "react";
import { CartContext } from '../CartContext/cartcontext';


function Cart () {
    const {cartData} = useContext(CartContext);

    console.log("cart data >>> ", cartData);

return (    
    <div className="cartInfo">
    <h3>Cart info</h3>
    {/*
        cartData.map((item) => {
            return <div>{`ID: ${item.id} - Quantity ${item.quantity}`}</div>;
        }) */
    }
    </div>
)
}

export default Cart;