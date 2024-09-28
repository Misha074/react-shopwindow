import { useState, useEffect } from "react"
import { API_KEY, API_URL } from '../config'

import { Preloader } from "./Preloader"

import {GoodsList} from "./GoodsList"


function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState([true])

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

    useEffect(function testFunction() {
        console.log(goods)
    }, [loading])


    return <main className="container content">
        {
            loading === true ? <Preloader /> : <GoodsList goods={goods}/>
        }
    </main>
}

export { Shop }