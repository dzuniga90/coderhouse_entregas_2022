import {useContext} from "react";
import ItemCount from "../../ItemCount/index";

import {CartContext} from '../../CartContext/cartcontext';
import { useState } from "react";


function ItemDetails({
    candyID, title, description, pictureUrl, price
}) {
    const {addItemToCart} = useContext(CartContext);

    const [itemAddedToCart, setItemAddedtoCart] = useState(false);
    const onAdd = (candyID) => {
        addItemToCart(candyID);
        setItemAddedtoCart(true);
    };

    return (
        <div className="items">
            <div className="itemImg">
            <img src={pictureUrl} />
            </div>
            <div className="cardBody">
            {title}<br></br>
            <br></br>{price}
            <div className="cardText">
             {description}
            </div>
            <ItemCount onAddItemsToCart={onAdd} candyID={candyID} 
            title={title} description={description} price={price}
            pictureUrl={pictureUrl} 
            />
            
            </div>
        </div>
        );
}
export default ItemDetails;