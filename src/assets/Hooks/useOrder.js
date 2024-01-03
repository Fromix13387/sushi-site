import {useContext, useEffect, useState} from "react";
import {OrderUser} from "../../App.jsx";
import store from "store";


const useOrder = (element) => {
    let {order, setOrder} = useContext(OrderUser)
    const [count,setCount] = useState(getCount())
    useEffect(()=> {
        setCount(getCount())
    }, [element])
    function getCount() {
        // eslint-disable-next-line react/prop-types
        let a = order.goods.filter(el => el['id'] === element['id'])
        return a.length === 0 ? 0 : a[0].amount
    }
    function setCountElement(arg = '') {
        if (arg === '') {
            let a = count+1
            setCount(a)
            // eslint-disable-next-line react/prop-types
            element['amount'] = a
            order = {...order, goods: [...order['goods'], element]}
            setOrder(order)
        }
        else {
            let a = arg === '-' ? count - 1 : count+1
            setCount(a)
            if (a !== 0) {
                // eslint-disable-next-line react/prop-types
                order.goods.forEach(el => {
                    // eslint-disable-next-line react/prop-types
                    if (el['id'] === element['id']) el['amount'] = a
                })
                setOrder({...order})
            }
            else {
                // eslint-disable-next-line react/prop-types
                let arr = order.goods.filter(el => !(el['id'] === element['id']))
                order = {...order, goods: arr}
                setOrder(order)
            }
        }

        store.set('user', order)
    }
    // eslint-disable-next-line no-constant-condition
    // while (true) {
    // console.log(count)
    return [count, setCountElement,  order]
}

export {useOrder}