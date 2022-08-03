import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
        <div className="items">
            <Card.Img variant="top" src={props.picURL} style={{width: '100px', height: '130px'}} />
            <div className="cardBody">
            {props.title}<br></br>
             <br></br>{props.price}
            <div className="cardText">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </div>
            <button>View Details</button>
            </div>
            <Card.Footer>
            <small className="text-muted">Stock info</small>
            </Card.Footer>
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