// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useState} from 'react';
import cl from "./Header.module.scss"
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import geo from '../../Image/geo.png'
// import tel from '../../Image/tel.png'
// import arrow from '../../Image/arrow.webp'
// import menu from '../../Image/menu.png'
// import person from '../../Image/person.webp'
import solt from '../../Image/solt.png'
import mark from '../../Image/mark.png'
import "./Header.scss"
import {OrderUser} from "../../../App.jsx";
const Header = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('/')
    let {order} = useContext(OrderUser)
    const set = () => {
        currentPath === 'basket' ? null : sessionStorage.setItem("history", currentPath)
    }
    useEffect(()=> {
        setCurrentPath(location.pathname)
    }, [location])
    return (
        <>
            <div className={cl.Header}>
                <div className={cl.top}>
                    <NavLink to="/">
                        <img width={10} src={geo} alt=""/>
                        Шоза Суши - Жуковский
                    </NavLink>

                    {/*<button className={cl.btn}>*/}
                    {/*    <img width={12} src={tel} alt=""/>*/}
                    {/*    8 (800) 222-03-30*/}
                    {/*    <img width={7} src={arrow} alt=""/>*/}
                    {/*</button>*/}
                    {/*<button className={cl.btn}>*/}
                    {/*    <img width={10} src={person} alt=""/>*/}
                    {/*    Войти*/}
                    {/*</button>*/}
                </div>
                { currentPath === '/' ?
                    <>
                        <img src={solt} alt=""/>
                        <div className={cl.header_action}></div>
                        <div className={cl.header_order}>
                            <div>
                                <p>Бесплатная доставка</p>
                                <h3>от 1234 руб.</h3>
                            </div>
                            <div>
                                <p>Стоимость доставки</p>
                                <h3>150 руб.</h3>
                            </div>
                            <div>
                                <p>Время доставки</p>
                                <h4>от 60 мин.</h4>
                            </div>
                        </div>
                    </> : null
                }
            </div>
            <div className={cl.Navigation + " Nav x-scroll"}>
                <div className="">
                    <NavLink to="/">Наше меню</NavLink>
                    <NavLink to="gifts">Подарки</NavLink>
                    {/*<NavLink to="action">Акции</NavLink>*/}
                    <NavLink to="about">О нас</NavLink>
                    <NavLink to="review">Отзывы</NavLink>
                    <NavLink to="payment">Доставка и оплата</NavLink>
                </div>
                {document.documentElement.clientWidth > 750 ?
                <NavLink to='basket'  onClick={(event)=> set(event)}>
                    <img width={20} src={mark} alt=""/> {order.goods.length !== 0 ? order.resultCount() + ' на ' + order.resultSum() + '.00 руб.' : "Корзина" }
                </NavLink>
             : null}</div>


            <div className={cl.Main}>
                <Outlet/>
            </div>

            <div className={cl.Footer}>
                <div>
                    <a href="https://dlvry.ru/documents/?document=policy&owner=2251395" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
                    <span>•</span>
                    <a href="https://dlvry.ru/documents/?document=rules&owner=2251395" target="_blank" rel="noreferrer">Пользовательское соглашение</a>
                    <span>•</span>
                    <a href="https://docs.google.com/document/d/1MgfbYvVe3GOArrcsYPIk_e1_kbMYSsStlxH1MODu4Mc/edit" target="_blank" rel="noreferrer">Публичная оферта</a>
                </div>
                <p>Уважаемые клиенты! При возврате денег после онлайн оплаты возможна задержка до 7 дней из-за банковских процедур. Обратите внимание на это, чтобы избежать возможных неудобств. Благодарим за понимание!</p>
            </div>


            {document.documentElement.clientWidth <= 750 ?
                <div className={cl.tel_nav}>
                    {/*<div><img width={20} src={menu }alt=""/></div>*/}
                    <Link to="basket">
                        <div> <img width={20} src={mark} alt=""/>x {order.resultCount()}</div>
                        <p>{order.resultSum()}.00 руб.</p>
                    </Link>
                </div>
                : null}
        </>

    );
};

export default Header;