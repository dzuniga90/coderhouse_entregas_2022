import {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import ItemDetails from "../Item/ItemDetails/itemdetails";
import {CartContext} from '../CartContext/cartcontext';

function ItemCount ({onAddItemsToCart} ) {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(10);
    const [enableCounter, setEnableCounter] = useState(true);
    const [enableAdd, setEnableAdd] = useState(true)

    const onAddtoCart = (id, counter) => {
        console.log(`${counter} added to the cart`);
        onAddItemsToCart(id, counter);
        console.log("ID: ", id, ", Quanity: ", counter);
    } 

    function addItem () {
        if (counter >= stock) {alert("The item quantity exceeds the current stock");
        setCounter(counter -1);
        setEnableAdd(false);

        }
        setCounter(counter + 1);

    }
    
    function decrementItem () {
        if (counter == 0) {return 0;}
        setCounter(counter - 1);
    }

    return (
    <div>
        <div className="counter">
        {stock==0 ?
            <p>Item out of stock</p> : null
        }
        <div className="quantitybtns">
        <button className="plus" onClick={
            addItem }
        style={{color: 'white', background: 'fuchsia'}} disabled={!enableCounter || !enableAdd}>+</button>
        <div className="quantity"><p>{counter}</p></div>

        <button className="minus" onClick={
            decrementItem
        }
        style={{color: 'white', background: 'gray'}} disabled={!enableCounter}
        >-</button>
        </div>
        </div>
        <div className="btnBuyContainer">
            <Link to={`/cart`}>
            <button className="buy" onClick={onAddtoCart}>Add to cart</button>
            </Link>
        </div>
    </div>
        );
}

export default ItemCount;