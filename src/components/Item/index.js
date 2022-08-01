import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Item(props) {
    return (
        <div className="items">
            <Row xs={3} md={4} className="g-4">
            {Array.from({length: 1}).map((_, idx) => ( 
            <Col>
            <Card>
            <Card.Img variant="top" src={props.picURL} style={{width: '100px', height: '130px'}} />
            <Card.Body>
            <Card.Title>{props.title}
            {props.children} <br></br>{props.price}</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
            <button>View Details</button>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Stock info</small>
            </Card.Footer>
            </Card>
            </Col>
            ))}
            </Row>            
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