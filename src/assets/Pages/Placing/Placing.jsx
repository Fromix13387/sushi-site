import React, {useContext, useState} from 'react';
import cl from "./Placing.module.scss"
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'

import Back from "../../Components/back/Back.jsx";
import {OrderUser} from "../../../App.jsx";
import {Link} from "react-router-dom";
const Placing = () => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [frame, setFrame] = useState('')
    const [entrance, setEntrance] = useState('')
    const [floor, setFloor] = useState('')
    const [apartment, setApartment] = useState('')
    let {order, setOrder} = useContext(OrderUser)
    const convertPhoneNumber = (inp) => {
        if (isValidPhoneNumber(inp, 'RU')) {
            const phoneNumber = parsePhoneNumber(inp, 'RU')
            return phoneNumber.formatNational()
        }
        return inp
    }
    return (
        <div className={cl.Placing}>
            <Back hist="/basket">Оформление заказа</Back>

            <div>
                <label>Имя <span>*</span></label>
                <input placeholder="Имя" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label>Телефон <span>*</span></label>
                <input placeholder="8(888)-888-88-88" type="tel" onChange={(e) => setTel(convertPhoneNumber(e.target.value))} value={convertPhoneNumber(tel)}/>
            </div>

            <div className={cl.address}>
                <h2>Укажите адрес доставки:</h2>
                <div>
                    <div>
                        <label>Город <span>*</span></label>
                        <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="Город"/>
                    </div>
                    <div>
                        <label> Улица <span>*</span></label>
                        <input onChange={(e) => setStreet(e.target.value)} value={street} type="text" placeholder="Улица"/>
                    </div>
                    <div>
                        <label>Дом <span>*</span></label>
                        <input onChange={(e) => setHouse(e.target.value)} value={house} type="text" placeholder="Дом"/>
                    </div>
                    <div>
                        <label>Корпус</label>
                        <input onChange={(e) => setFrame(e.target.value)} value={frame} type="text" placeholder="Корпус"/>
                    </div>
                    <div>
                        <label>Подъезд</label>
                        <input onChange={(e) => setEntrance(e.target.value)} value={entrance} type="text" placeholder="Подъезд"/>
                    </div>
                    <div>
                        <label>Этаж</label>
                        <input onChange={(e) => setFloor(e.target.value)} value={floor} type="text" placeholder="Этаж"/>
                    </div>
                    <div>
                        <label>Кв./офис</label>
                        <input onChange={(e) => setApartment(e.target.value)} value={apartment} type="text" placeholder="Кв./офис"/>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="">Примечание к заказу</label>
                <textarea rows="7" placeholder="Примечание к заказу"></textarea>
            </div>
            <div>
                <label htmlFor="">Количество персон(приборы)</label>
                <input style={{maxWidth: '250px'}} type="number" value={0}/>
            </div>

            <div className={cl.result}>
               <div><p>Сумма заказа:</p><p>{order.resultSum()}.00 руб.</p></div>
               <div><p>Доставка:</p><p>{order.resultSum() > 1234 ? 'бесплатно' : '150.00 руб.'}</p></div>
               <div><p>ИТОГО к оплате::</p><p>{order.resultSum() + (order.resultSum() > 1234 ? 0 : 150)}.00 руб.</p></div>

            </div>
            <div className={cl.btn}>
                <Link to="/basket">В корзину</Link>
                <Link to="/pay" >Оплатить</Link>
            </div>
        </div>
    );
};

export default Placing;