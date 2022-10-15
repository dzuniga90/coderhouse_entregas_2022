import React, {useState} from "react";
import ItemDetailsContainer from "../ItemDetailsContainer/itemdetailscontainer";
export const CartContext = React.createContext([]);

export default function CartCustomContext({children}) {
    const [cart, setCart] = useState([]);
    const [itemToRemove, setItemToRemove] = useState([]);
    const [count, setCount] = useState(0);
    
    const addItemToCart = (product) => {
        const productInCart = cart.find((productInCart) => 
        productInCart.id === product.id);

        if(productInCart) {
            const newCart = cart.map(productInCart => {
                if(productInCart.id === product.id) {
                    return {...productInCart, counter: productInCart.counter
                         + product.counter}
                }
                else {
                    return productInCart;
                }
            });
            setCart(newCart);
        }else {
            setCart([...cart, product]);
             }
        //const updatedList = [...cart, product];
        //setCart(updatedList);
        setCount(cart.length);
        //console.log("Inside cart :", updatedList);
    };

    const removeFromCart = (id) => {
        setCart((cart.filter((item) => item.id !== id)));
    };

    const clearCart = () =>
    {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{addItemToCart, cart, removeFromCart, clearCart}}>
        {children}
    </CartContext.Provider>);
}
