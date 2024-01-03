import React from 'react';
import cl from "./Gifts.module.scss"
const Gifts = () => {
    return (
        <div className={cl.Gifts}>
            <h1>Подарки</h1>
            <div>
                <p>При заказе на сумму от 1650 руб. — мы дарим 1 подарок!</p>
                <p>При заказе на сумму от 2150 руб. — мы дарим 2 подарка!</p>
                <p>При заказе на сумму от 2650 руб. — мы дарим 3 подарка!</p>
            </div>
        </div>
    );
};

export default Gifts;