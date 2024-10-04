import { useState, useEffect } from "react"
import { API_URL } from '../config'

import { Cart } from "./Cart"

import { Preloader } from "./Preloader"

import { GoodsList } from "./GoodsList"

import { BasketWindow } from "./BasketWindow"


function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState([true])
    const [order, setOrder] = useState([])
    const [busketWindowVisibility, setBusketWindowVisibility] = useState(false)
    // const [busketPrice, setBusketPrice] = useState(0)

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
    }, [])

    const addGood = (item) => {
        // Проверяем, есть ли уже элемент в массиве 
        const itemIndex = order.findIndex(inOrderItem => inOrderItem.mainId === item.mainId);

        if (itemIndex === -1) {
            // Элемент не найден, добавляем новый с quantity = 1
            setOrder(prevOrder => {
                const newItem = { ...item, quantity: 1 }; // Создаем новый элемент
                const newOrder = [...prevOrder, newItem]; // Создаем новый массив с добавленным элементом  
                console.log(newOrder); // Здесь вы увидите обновленный массив - и по факту то что будет оказывается в order после завршения обновления состояния 
                return newOrder; // Возвращаем новый массив для обновления состояния  
            });
        } else {
            // Элемент уже есть, увеличиваем его количество
            setOrder(prevOrder => {
                const newOrder = [...prevOrder]; // Копируем текущий массив
                newOrder[itemIndex].quantity += 1; // Увеличиваем quantity существующего элемента на 1
                return newOrder; // Возвращаем новый массив для обновления состояния  
            });
        }
    }

    const busketWindowVisibilityToggler = () => {
        if (order.length !== 0) {
            if (busketWindowVisibility === false) {
                setBusketWindowVisibility(true)
            }
            else setBusketWindowVisibility(false)
        }
    }

    const goodQuantityDecrease = (item) => {
        const itemIndex = order.findIndex(inOrderItem => inOrderItem.mainId === item.mainId);

        if (itemIndex !== -1) { // Проверяем, что элемент найден
            if (item.quantity > 0) {
                setOrder(prevOrder => {
                    const newOrder = [...prevOrder]; // Копируем текущий массив
                    newOrder[itemIndex].quantity -= 1; // Увеличиваем quantity существующего элемента на 1
                    return newOrder; // Возвращаем новый массив для обновления состояния  
                });
            } else {
                setOrder(prevOrder => {
                    const newOrder = [...prevOrder]; // Копируем текущий массив
                    const filteredOrder = newOrder.filter(inOrderItem => inOrderItem.mainId !== item.mainId) // удаляем из массива элемент
                    return filteredOrder; // Возвращаем новый массив без удалённого элемента для обновления состояния  
                });
            }
        }
    }

    const goodQuantityIncrease = (item) => {
        const itemIndex = order.findIndex(inOrderItem => inOrderItem.mainId === item.mainId);
        if (itemIndex !== -1) { // Проверяем, что элемент найден
            setOrder(prevOrder => {
                const newOrder = [...prevOrder]; // Копируем текущий массив
                newOrder[itemIndex].quantity += 1; // Увеличиваем quantity существующего элемента на 1
                return newOrder; // Возвращаем новый массив для обновления состояния  
            });

        }
    }



    // useEffect(function testFunction() {
    //     console.log(goods)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [loading])


    return <main className="container content">
        {
            busketWindowVisibility === false ? <></> : <BasketWindow order={order} goodQuantityDecrease={goodQuantityDecrease} goodQuantityIncrease={goodQuantityIncrease}/>
        }
        <Cart quantity={order.length} busketWindowVisibilityToggler={busketWindowVisibilityToggler} />
        {
            loading === true ? <Preloader /> : <GoodsList addGood={addGood} goods={goods} />
        }
    </main>
}

export { Shop }