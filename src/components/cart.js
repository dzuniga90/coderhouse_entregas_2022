import "../App.css";
import cart from "../imgs/cart.png";
import {Link} from 'react-router-dom';

function CartWidget() {
  return (<div className="cart">
     <img src={cart}/><Link to="./cart">My Cart</Link>
  </div>);
}

export default CartWidget;