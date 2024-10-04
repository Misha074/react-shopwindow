import React from "react";

function BasketWindow({order, goodQuantityDecrease, goodQuantityIncrease}) {
    return (
        <div className="basket-window">
            Корзина
            {
                order.length === 0 ?
                    <div>Пока корзина пуста</div>
                    :
                    <div className="basket-window__list">
                        {
                            order.map(orderItem => (
                                <div className="basket-window__item" key={orderItem.offerId}>
                                    <p>{orderItem.displayName}</p>
                                    {/* тут будут кнопки конроля */}
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
                                    <button className="basket-window__item-remove-button" type="button">
                                        x
                                    </button>
                                </div>
                            ))
                        }
                        <p>Сумма заказа: </p>
                    </div>
            }
        </div>
    )
}

export { BasketWindow }