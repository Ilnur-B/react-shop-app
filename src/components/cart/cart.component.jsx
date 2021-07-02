const Cart = ({quantity = 0, handleBasketShow}) => {
    return (
        <span className='cart purple lighten-2' onClick={handleBasketShow}>
            <i className="material-icons cart-material-icons  white-text">
                shopping_cart
            </i>
            {quantity
                ? <span className='quantity'>
                    {quantity}
                </span>
                : null}
        </span>
    )
}

export default Cart
