import {useContext} from "react";
import ItemCount from "../../ItemCount/index";

import {CartContext} from '../../CartContext/cartcontext';
import { useState } from "react";


function  ItemDetails({product}) {
    const {addItemToCart} = useContext(CartContext);

    const [itemAddedToCart, setItemAddedtoCart] = useState(false);
   const onAdd = (product) => {
        addItemToCart(product);
        setItemAddedtoCart(true);
    }; 

    return (
        <div className="itemDetailWrapper">
        <div className="itemDetailImg">
                <img src ={product.picURL}/>
        </div>
            <div className="productDetails">
                <div className="cardBody"><h2>
                {product.title}</h2><br></br>
                <h4><strong>{product.price}</strong></h4>
                <div className='itemCount'>
                <ItemCount onAddItemsToCart={onAdd} item={product}/>
                </div>
                <br></br>
                <div className="cardText">
                {product.description}
                </div>

            </div>
            
    </div> 
        </div>
        );
}
export default ItemDetails;