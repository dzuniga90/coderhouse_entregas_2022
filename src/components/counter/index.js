import {useState} from "react";

function Counter () {
    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(10);
    const [enableCounter, setEnableCounter] = useState(true);
    const [enableAdd, setEnableAdd] = useState(true)
    setTimeout( () => {
        setStock(0)
        setEnableCounter(false);
    }, 15000);



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
        <div className="counter">
            Item
        <img src="https://www.hersheys.com/is/image/content/dam/smartlabelproductsimage/jollyrancher/00010700156716-0010.png?wid=570&hei=570&fmt=png-alpha"/>
        {stock==0 ?
            <p>Item out of stock</p> : null
        }
        <p>{counter}</p> <br/>
        <button onClick={
            addItem }
        style={{color: 'white', background: 'fuchsia'}} disabled={!enableCounter || !enableAdd}>+</button>
        <button onClick={
            decrementItem
        }
        style={{color: 'white', background: 'gray'}} disabled={!enableCounter}
        >-</button>
        </div>
    );
}

export default Counter;