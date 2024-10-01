import React from "react";

import { GoodItem } from "./GoodsItem";


function GoodsList({goods, addGood}) {
    if (goods.length === 0) {
        return <h3>Нечего показать=/</h3>
    }
    return (
        <ul className="goods">
            {
                goods.map(goodItem  => (
                    <GoodItem addGood={addGood} good={goodItem} key={goodItem.offerId}/>
                ))
            }
        </ul>
    )
}

export { GoodsList }