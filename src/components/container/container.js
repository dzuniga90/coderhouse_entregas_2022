function ItemListContainer(props) {

    return (<div className='hello'>
        {props.texto}
        <div>
            {props.children}
        </div>
        </div>);
}

export default ItemListContainer;