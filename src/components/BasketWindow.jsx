import React from "react";

function BasketWindow({ busketWindowVisibilityToggler, order, goodQuantityDecrease, goodQuantityIncrease, removeGood, busketTotalPrice }) {
    return (
        <div className="basket-window">
            <header className="basket-window__header">
                <h4 className="basket-winodw__title">
                    Корзина
                </h4>
                <button
                    className="basket-window__close-button"
                    type="button"
                    onClick={() => busketWindowVisibilityToggler()}>
                    <i className="material-icons">close</i>
                </button>
            </header>
            <main className="basket-window__main">
                {
                    order.length === 0 ?
                        <div>Пока корзина пуста</div>
                        :
                        <div className="basket-window__list">
                            {
                                order.map(orderItem => (
                                    <div className="basket-window__item" key={orderItem.offerId}>
                                        <p>{orderItem.displayName}</p>
                                        <div className="basket-window__item-buttons-wrapper">
                                            <button
                                                type="button"
                                                onClick={() => goodQuantityDecrease(orderItem)}>
                                                -
                                            </button>
                                            <span>x{orderItem.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => goodQuantityIncrease(orderItem)}>
                                                +
                                            </button>
                                        </div>
                                        <p> = {orderItem.price.regularPrice * orderItem.quantity}</p>
                                        <button
                                            className="basket-window__item-remove-button"
                                            type="button"
                                            onClick={() => removeGood(orderItem)}>
                                            <i className="material-icons">close</i>
                                        </button>
                                    </div>
                                ))
                            }

                        </div>
                }
            </main>
            <footer className="basket-window__footer">
                <p className="basket-window__price">
                    Сумма заказа: {busketTotalPrice}
                </p>
                <button
                    type="button">
                        Оформить заказ
                </button>
            </footer>


        </div>
    )
}

export { BasketWindow }