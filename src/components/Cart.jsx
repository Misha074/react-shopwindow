function Cart({ quantity, busketWindowVisibilityToggler }) {
    return <button
        className="cart indigo accent-2 white-text"
        type="button"
        onClick={() => busketWindowVisibilityToggler()}
    >   
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </button>
}

export { Cart }