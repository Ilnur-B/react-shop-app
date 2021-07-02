import CardItem from "../card-item/card-item.component";


const CardList = ({goods = [], addToBasket = Function.prototype}) => {
    return (

        (goods.length) ? <div className='card-lists'>
                {goods.map(good => {
                    return <CardItem key={good.id} {...good} addToBasket={addToBasket}/>
                })}
            </div>
        : <h3>Nothing</h3>
    )

}


export default CardList
