import BasketItem from "../basket-item/basket-item.component";


const Basket = ({order, handleBasketShow, deleteFromBasket, incrementOrderItem, decrementOrderItem}) => {

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)


    return (
        <div className='basket '>
            <ul className="collection with-header  ">
                <li className="collection-item active">

                    <span className="secondary-content">
                        <i onClick={handleBasketShow} className="material-icons">close</i>
                    </span>
                    <h6>
                        КОРЗИНА
                    </h6>

                </li>

                {order.length
                    ? order.map(item => {
                        return <BasketItem
                            {...item}
                            key={item.id}
                            deleteFromBasket={deleteFromBasket}
                            decrementOrderItem={decrementOrderItem}
                            incrementOrderItem={incrementOrderItem}
                        />
                    })
                    : <li className="collection-item">ничего нет</li>
                }


                <li className="collection-item active"><h6>итог {totalPrice} руб.</h6></li>

            </ul>
        </div>
    )

}
export default Basket
