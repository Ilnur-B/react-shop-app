import {useEffect, useState} from "react";
import Preloader from "../preloader/preloader.component";
import CardList from "../card-list/card-list.component";
import Cart from "../cart/cart.component";
import Basket from "../basket/basket.component";
import Alert from "../alert/alert.component";

import {API_URL, API_KEY} from "../../config";

const Main = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasket, setIsBasket] = useState(false)
    const [alertName, setAlertName] = useState('')

    const deleteAlertName = () => {
        setAlertName('')
    }



    const handleBasketShow = () => {
        setIsBasket(!isBasket)
    }

    const incrementOrderItem = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                let newQuantity = el.quantity + 1
                return {...el, quantity: newQuantity}
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decrementOrderItem = (itemId) => {
        const newOrder = order.map(el => {
                if (el.id === itemId) {

                    let newQuantity = el.quantity - 1

                    return {...el, quantity: newQuantity >= 0 ? newQuantity: 0}
                } else {
                    return el
                }
            })
        setOrder(newOrder)

    }

    const deleteFromBasket = (itemId) => {
        const newOrder = order.filter(elem => elem.id !== itemId)
        setOrder(newOrder)
    }

    const addToBasket = (item) => {                                   //функция добавления товара в корзину

        const itemIndex = order.findIndex(                                              // поиск по корзине на
            (orderItem) => orderItem.id === item.id                                     // наличие уже добавленных
        );                                                                            // аналогичных товаров

        if (itemIndex < 0) {
            const newItem = {                                     // если товар добавляется впервые
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {          //сравнение индекса найденного тавара с индексом товара в корзине
                if (itemIndex === index) {
                    return {
                        ...orderItem,                                       // если совпадает, то увеличиваем кол-во
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem                                     // если не совпадает, то товар остается без изменений
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }



    useEffect(() => {                     //получение данных при загрузке страницы
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    return <main>
        {loading ? <Preloader/> : <CardList goods={goods} addToBasket={addToBasket}/>}
        <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
        {isBasket ? <Basket
            handleBasketShow={handleBasketShow}
            order={order}
            deleteFromBasket={deleteFromBasket}
            incrementOrderItem={incrementOrderItem}
            decrementOrderItem={decrementOrderItem}
        /> : null}
        {alertName ? <Alert name={alertName} deleteAlertName={deleteAlertName}/> : null}

    </main>

}

export default Main
