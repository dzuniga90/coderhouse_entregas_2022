import "../App.css";
import cart from "../imgs/cart.png";
function CartWidget() {
  return (<div className="cart">
     <img src={cart}/><a href="index.html">My Cart</a>
  </div>);
}

export default CartWidget;