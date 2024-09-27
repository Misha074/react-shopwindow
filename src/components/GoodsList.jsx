import React from "react";

import { GoodItem } from "./GoodsItem";



function GoodsList({goods}) {
    if (goods.length === 0) {
        return <h3>Нечего показать=/</h3>
    }
    return (
        <ul className="goods">
            {
                goods.map(goodItem  => (
                    <GoodItem good={goodItem} key={goodItem.offerId}/>
                ))
            }
        </ul>
    )
}

export { GoodsList }