const BasketItem = ({id, name, quantity, price, deleteFromBasket, incrementOrderItem, decrementOrderItem}) => {
    return (
        <li className="collection-item">
            {name}{'   '}
            <i className="material-icons basket-quatnt-icons" onClick={() => incrementOrderItem(id)}>add</i>{quantity}<i
            className="material-icons basket-quatnt-icons" onClick={() => decrementOrderItem(id)}>remove</i>
            {'   '}= {price * quantity}


            <span className="secondary-content">
                <i className="material-icons" onClick={() => deleteFromBasket(id)}>close</i>

            </span>
        </li>
    )
}

export default BasketItem
