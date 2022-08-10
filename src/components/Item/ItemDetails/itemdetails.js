function ItemDetails(item) {
    return (
        <div className="items">
            <div class="itemImg">
            <img src={item.pictureUrl} />
            </div>
            <div className="cardBody">
            {item.title}<br></br>
            <br></br>{item.price}
            <div className="cardText">
             {item.description}
            </div>
            <div className="btnBuyContainer">
                <button className="buy">Buy</button>
                </div>
            </div>
        </div>
        );
}
export default ItemDetails;