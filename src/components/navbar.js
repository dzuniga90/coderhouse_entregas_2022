import "../App.css";
import CartWidget from "../components/cart";
import {Link} from 'react-router-dom';

function Navbar() {
    return (<div>
    <nav>
        <div className="storeLogo"><Link to ='/'>Sweet Pix</Link></div>
        <ul className="navlinks">
            <li>
                <Link to='category/gummy' className="link">Gummy</Link>
            </li>
            <li>
                <Link to='category/chocolate' className="link">Chocolate</Link>
            </li>
            <li>
                <Link to='category/latinAmerican' className="link">Latin American</Link>
            </li>
        </ul> 
        <CartWidget/>    
       </nav>
    </div>);
}

export default Navbar;