import {useContext} from "react";
import ItemCount from "../../ItemCount/index";

import {CartContext} from '../../CartContext/cartcontext';
import { useState } from "react";


function ItemDetails({
    id, title, description, pictureUrl, price
}) {
    const {addItemToCart} = useContext(CartContext);

    const [itemAddedToCart, setItemAddedtoCart] = useState(false);

    const onAdd = (id, quantityToAdd) => {
        addItemToCart({id, quantityToAdd});
        console.log("Quanity to add event");
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
            <ItemCount onAddItemsToCart={onAdd}/>
            
            </div>
        </div>
        );
}
export default ItemDetails;