function Cart(props) {
    const {quantity = 0} = props
    return <div className="cart indigo accent-2 white-text">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
}

export {Cart}