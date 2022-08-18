import {useState, useEffect} from "react";
import {getProductById} from "../data/data";
import ItemDetails from "../Item/ItemDetails/itemdetails";
import { useParams } from 'react-router-dom';

function ItemDetailsContainer() {
const [product, setProduct] = useState({});
    const {productID} = useParams();
    
    useEffect(() => {
        getProductById(productID).then(
            products => {
                console.log("products >>> " + products)
                setProduct(products);
            }
        );
        console.log("productId " + productID);

    }, [productID])
    

    return (<>
        <h1>Details</h1>
        <ItemDetails {...product}/>
    </>);
}

export default ItemDetailsContainer;