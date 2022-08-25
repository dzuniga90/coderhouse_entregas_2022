import Item from "../Item/index";
function ItemList({props}) {
    return (
     props.map(item => {
        console.log(item.categoryID);
        console.log(item.title);
        console.log(item.price);
        console.log(item.pictureUrl);
        return (<div className="itemList">
            <Item key={item.id} id={item.id} categoryId = {item.categoryID} title={item.title} price={item.price}
            picURL = {item.picURL} desc= {item.description}/>
        </div>);
    }
    ));
}

export default ItemList;