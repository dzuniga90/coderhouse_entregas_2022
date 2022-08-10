import {Link} from 'react-router-dom';

function Item(props) {
    return (
        <div className="items">
            <div class="itemImg">
            <img src={props.picURL} />
            </div>
            <div className="cardBody">
            {props.title}<br></br>
             <br></br>{props.price}
            <div className="cardText">
               {props.desc}
            </div>
            <div className="link">
            <Link to={`/detail/${props.id}`} style={{textDecoration: 'none' }}>
                    <div className="btnDetailsContainer">
                    <button className="viewDetails">View Details</button>
                    </div>
                    </Link>
            </div>
            </div>
        </div>
        );
}

/*
    <div className="item"> 
            <div className="itemTitle">
                {props.title}
                {props.children}
            </div>
            <img src={props.picURL} style={{width: '300px', height:'300px'}}/>
            <button>View details</button>
            <div className="itemStock">
            </div>
    </div> 
*/

export default Item;