import {useState, useEffect} from "react";
import {getProductsByCategory, getProducts} from "../data/data";
import ItemList from "../ItemList/itemlist";
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {categoryID} = useParams();

    useEffect(() => {
        if(!categoryID) {
            getProducts().then(result=> {
                setProducts(result)
            })
            .catch(err=>console.log(err))
        }
        else {            
            getProductsByCategory(categoryID).then(result => {
            
                setProducts(result);
            })
            .catch(err => alert("category not found")) 
        }
    },[categoryID])
    
    return (<div className="products">
        <ItemList props={products}/>
        </div>
    );
}

export default ItemListContainer;