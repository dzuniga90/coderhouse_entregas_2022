import React, {useState} from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({children}) {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const addItemToCart = (id) => {
        const updatedList = [...cart, id];
        setCart(updatedList);
        setCount(updatedList.length);
        console.log("Inside cart :", updatedList);
    };


    return (
        <CartContext.Provider value={{addItemToCart, cartData:cart}}>
        {children}
    </CartContext.Provider>);
}
