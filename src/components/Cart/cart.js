import React, {useContext} from "react";
import { CartContext } from '../CartContext/cartcontext';
import {useState} from "react";


function Cart () {
    const {cartData} = useContext(CartContext);
    console.log("cart data >>> ", cartData);

    const {clearCart} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);
    const [removedFromCart, setRemovedFromCart] = useState(false);
    const [confrimDelete, setConfirmDelete] = useState(false);

    const onDelete = (candyID) => {
        removeFromCart(candyID);
        setRemovedFromCart(true);
        console.log("Removed from cart: >>> ", removedFromCart);
    }

return (    
    <div className="cartInfo">
    <h3>Cart info</h3>
    <button onClick={clearCart}>Clear Cart</button>

    {
        cartData.map((item) => {
            return <div>
                <div className="itemQuantity">
                    <h2>
                {item.counter}
                    </h2>
                </div>
                <div className="cartDetail">
                <div className="items">
                    <div className="itemImg">
                    <img src={item.pictureUrl} />
                    </div>
                    <div className="cardBody">
                    {item.title}<br></br>
                    <br></br>
                    <div className="cardText">
                     {item.description}<br></br>
                     {"$" + item.price}
                    </div> 
                    <button onClick={() => onDelete(item.candyID) }>Remove</button>           
                    </div>
                </div>
                </div>
            </div>;
        })
    }
    </div>
)
}

export default Cart;