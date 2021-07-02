const CardItem = ({id, name, description, price, full_background, addToBasket = Function.prototype}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background}/>
            </div>

            <div className="card-content ">
                <p className='card-title'>{name}</p>
                <p className="info">{description}</p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={()=>addToBasket({name, id, price})}>купить</button>
                <span className="card-title right">
                            {price}
                        </span>
            </div>
        </div>
    )
}


export default CardItem
