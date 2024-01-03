import React, {useContext, useState} from 'react';
import Back from "../../Components/back/Back.jsx";
import cl from "./Pay.module.scss"
import {rand} from "../../../js/function.js";
import {OrderUser} from "../../../App.jsx";
import {MoonLoader} from "react-spinners";
let a = rand(1000000, 999999999)
const Pay = () => {

    const [status,setStatus] = useState(0)

    const check = () => {
        setStatus(1)
        setTimeout(()=> {
            setStatus(2)
        }, 10000)


    }
    let {order} = useContext(OrderUser)
    return (
        <div className={cl.Pay}>
            <Back hist="/placing">Оплата</Back>
            <h3>Внимание: обязательно укажите коментарий при оплате, иначе система не сможет распознать оплату</h3>
            <div className={cl.form}>
                <div>
                    <label>Номер карты:</label>
                    <input type="number" name="" id="" value={2200222200000000} disabled/>
                </div>
               <div>
                   <label>Коментарий: </label>
                   <input type="text" name="" id="" value={"order" + a} disabled/>
               </div>
               <div>
                   <label>Инициалы: </label>
                   <input type="text" name="" id="" value={"Иванов Иван Иванович"} disabled/>
               </div>
                <div>
                    <label>Сумма: </label>
                    <input type="text" name="" id="" value={order.resultSum() +(order.resultSum() > 1234 ? 0 : 150)+".00 руб."} disabled/>
                </div>


            </div>

            <button onClick={()=>check()}>Проверить оплату</button>

            {status === 1 ?
                <div className={cl.ch}>
                    <p>Производится проверка, убедитесь в верности ведённых данных</p>
                    <MoonLoader color="#ac53d2" />
                </div>: null}
            {status === 2 ? <div className={cl.ch}>
                <p style={{color: 'red'}}>Произошла ошибка, попробуйте заного</p>
            </div> : null}
        </div>
    );
};

export default Pay;