import React, {useContext, useState} from 'react';
import cl from "./Basket.module.scss"
import {Link} from "react-router-dom";
import {OrderUser} from "../../../App.jsx";
import CardBuy from "../../Components/CardBuy/CardBuy.jsx";
import Back from "../../Components/back/Back.jsx";
import store from "store";
const Basket = () => {
    const [promo, setPromo] = useState('')
    const hist =  sessionStorage.getItem("history");


    let {order, setOrder} = useContext(OrderUser)
    const clear = () => {
        setOrder({...order, goods: []})
        store.remove('user')
    }
    const generateOrder = () => {
        return (
            <>
                <div className={cl.products}>
                    <table>
                        {order.goods.map(el => {
                            return (
                                <CardBuy key={el['id']} info={el}/>
                            )
                        })}
                    </table>
                </div>
                <div className={cl.clear} onClick={()=>clear()}>Очистить корзину</div>
            </>
        )
    }
    const active = () => {
        null
    }
    return (
        <div className={cl.Basket}>
            <Back hist={hist}>Корзина</Back>

            {
                order.goods.length === 0 ? <>
                    <div className={cl.empty}>
                        <h2>Ой, пусто!</h2>
                        <p>Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар или введите промокод</p>
                    </div>
                    <Link to='/'>Перейти в меню</Link>
                    <p>или</p>

                </> : null
            }
            <div className={cl.activePromo}><input placeholder="Введите промокод" onChange={(e) => setPromo(e.target.value)} value={promo} type="text"/><button onClick={()=> active()}>Применить</button></div>

            {order.goods.length !== 0 ? generateOrder() : null}


            {
                order.goods.length  !== 0 ? <>
                    <div className={cl.result}>Сумма заказа: <span>{order.resultSum()}.00 руб.</span></div>

                    <div className={cl.btn}>
                        <Link to="/">Вернуться в меню</Link>
                        <Link to="/placing">Далее</Link>
                    </div>

                </> : null
            }
        </div>
    );
};

export default Basket;