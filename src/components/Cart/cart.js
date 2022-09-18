import React, {useContext} from "react";
import { CartContext } from '../CartContext/cartcontext';
import {useState} from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartModal from '../CartModal/modal';
function Cart () {
    const {cart} = useContext(CartContext);
    console.log("cart data >>> ", cart);

    const {clearCart} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);
    const [removedFromCart, setRemovedFromCart] = useState(false);
    const [confrimDelete, setConfirmDelete] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onDelete = (id) => {
        setShowModal(true);
        removeFromCart(id);
        setRemovedFromCart(true);
        console.log("Removed from cart: >>> ", removedFromCart);
    }

return (    
    <div className="cartInfo">
    <h3>Cart info</h3>

    {/*<button onClick={clearCart}>Clear Cart</button> */}
    <div className="clearCart">
        <Button variant="danger" onClick={clearCart} size='md'>Clear Cart</Button>
    </div>

    {
        cart.map((item) => {

            return <div className="cartContainer">
                        {showModal && <CartModal title="Are you sure you want to delete this item?" 
                        action="Delete" cancelAction="Cancel" handleAction={() => onDelete(item.id)} handleClose={() => setShowModal(false)}
                         />}
                <div className="itemQuantity">
                    <h2>
                {item.counter}
                    </h2>
                </div>
                <div className="cartDetail">
                <div className="items">
                    <div className="itemImg">
                    <img src={item.picURL}/>
                    <button class="btn btn-secondary btn-lg" onClick={() => setShowModal(true) }><i class="bi bi-trash"></i></button>           

                    </div>
                    <div className="cardBody">
                    {item.title}<br></br>
                    <br></br>
                    <div className="cardText">
                     {item.description}<br></br>
                     {"$" + item.price}
                    </div> 
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