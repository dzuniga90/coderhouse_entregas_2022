import {useState, useEffect} from "react";
import {getProductById} from "../data/data";
import ItemDetails from "../Item/ItemDetails/itemdetails";
import { useParams } from 'react-router-dom';

function ItemDetailsContainer() {
const [product, setProduct] = useState({});
    const {productID} = useParams();
    
    useEffect(() => {
        getProductById(productID)
        .then(result => setProduct(result))
        .catch(err => console.log(err));
    }, [productID])
    

    return (<>
        <h1>Details</h1>
        <ItemDetails product={product}/>
    </>);
}

export default ItemDetailsContainer;