import { useState, useEffect } from "react"
import {API_URL } from '../config'

import { Cart } from "./Cart"

import { Preloader } from "./Preloader"

import {GoodsList} from "./GoodsList"


function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState([true])
    const [order, setOrder] = useState([])

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': '1342b2fa-68038629-eb6495f4-67a88463',
            }
        })
            .then(responce => responce.json())
            .then(data => {
                let cuttedData = data.shop.slice(0, 10)
                cuttedData && setGoods(cuttedData);
                setLoading(false)
            })
    },[])

    function addGood(item) {
        setOrder(prevOrder => [...prevOrder, item])
        console.log(item)
        console.log(order)
    }

    // useEffect(() => {
    //     console.log(order)
    // }, order)

    useEffect(function testFunction() {
        console.log(goods)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])


    return <main className="container content">
        <Cart quantity={order.length}/>
        {
            loading === true ? <Preloader /> : <GoodsList addGood={addGood} goods={goods}/>
        }
    </main>
}

export { Shop }