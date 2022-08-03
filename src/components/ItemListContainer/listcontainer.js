import {useState, useEffect} from "react";
import getFetch from "../data/data";
import ItemList from "../ItemList/itemlist";

function ItemListContainer(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
    },[])
    
    return (<>
        <ItemList props={data}/>
    </>);
}

export default ItemListContainer;