import React, {useContext} from "react";
import { CartContext } from '../CartContext/cartcontext';
import {useState, useRef} from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartModal from '../CartModal/modal';
import CartModal2 from "../CartModal/modal2";
function Cart () {

    const {cart} = useContext(CartContext);
    console.log("cart data >>> ", cart);

    const {clearCart} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);
    const [removedFromCart, setRemovedFromCart] = useState(false);
    //const [confrimDelete, setConfirmDelete] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [modalData, setModalData] = useState(null);

    const onDelete = (id) => {
        setShowModal(true);
        removeFromCart(id);
        setRemovedFromCart(true);
        setShowModal(false);
        console.log("Removed from cart: >>> ", removedFromCart);
    }

return (    
    <div className="cartInfo">
    <h3>Cart info</h3> {console.log("Modal data: ", modalData)}
    {
        cart.length === 0 && <p>Cart empty</p>
    }
    { <CartModal 
    id="modal" title="Are you sure you want to delete this item?" 
    onOpen={showModal}
    handleOpen={showModal}
    action="Delete" cancelAction="Cancel" handleAction={() => onDelete(modalData)} 
    handleClose={() => {setShowModal(false);
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';}}
     />}
    {/*<button onClick={clearCart}>Clear Cart</button> */}
    <div className="clearCart">

        <Button variant="danger" onClick={clearCart} size='md'>Clear Cart</Button>

    </div>

    {
        cart.map((item) => {

            return <div className="cartContainer">

                <div className="itemQuantity">
                    <h2>
                {item.counter}
                    </h2>
                </div>
                <div className="cartDetail">
                <div className="items">
                    <div className="itemImg">
                    <img src={item.picURL}/>
                    <button class="btn btn-secondary btn-lg" 
                    onClick={() =>{ setModalData(item.id);
                        setShowModal(true);
                    }} ><i class="bi bi-trash"></i></button>           

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