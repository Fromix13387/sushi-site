import React from 'react';
import cl from "./Payment.module.scss"
const Payment = () => {
    return (
        <div className={cl.Payment}>
            <h1>Доставка и оплата</h1>
            <div>
                <h2>Условия доставки</h2>
                <p>Доставка — 150₽</p>
                <p>Бесплатная доставка от 1234₽</p>
            </div>

            <div>
                <h2>Условия оплаты</h2>
                <p>Картой</p>
            </div>

        </div>
    );
};

export default Payment;