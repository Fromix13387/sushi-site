import React from 'react';
import cl from './About.module.scss'
const About = () => {
    return (
        <div className={cl.About}>
            <h1>О компании</h1>
            <hr/>
            <div>
                <h2>Контакты</h2>
                <p>8 (800) 222-03-30 — Телефон для заказов</p>
            </div>
            <hr/>
            <div>
                <h2>Мы находимся</h2>
                <p>— Солнечная 4</p>
            </div>
            <hr/>
            <div>
                <h2>Режим работы<span> — Круглосуточный</span></h2>
            </div>

        </div>
    );
};

export default About;