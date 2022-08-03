import Item from "../Item/index";
function ItemList({props}) {
    return (
     props.map(item => {
        console.log(item.candyID);
        console.log(item.title);
        console.log(item.price);
        console.log(item.pictureUrl);
        return (<div className="itemList">
            <Item key={item.candyID} candyID={item.candyID} title={item.title} price={item.price}
            picURL = {item.pictureUrl}/>
        </div>);
    }
    ));
}

export default ItemList;