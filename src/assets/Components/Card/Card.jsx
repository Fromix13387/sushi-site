// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useState} from 'react';
import cl from "./Card.module.scss";
import {getCompound, getCount} from "../../../js/function.js";
import {useOrder} from "../../Hooks/useOrder.js";
import Counter from "../Сounter/Сounter.jsx";
import {Link, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({info}) => {
    // let {order, setOrder} = useContext(OrderUser)
    const [count, setCountElement] = useOrder(info)
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('/')
    const set = () => {
        currentPath === 'product' ? null : sessionStorage.setItem("history", currentPath)
    }
    useEffect(()=> {
        setCurrentPath(location.pathname)
    }, [location])
    return (

        // eslint-disable-next-line react/prop-types
        <div id={"item"+info['id']} key={info['id']} className={count !== 0 ? cl.Card + " " + cl.card_buy : cl.Card}>
            <Link onClick={()=> set()} to={"Product/"+ info['id']}>
                {/* eslint-disable-next-line react/prop-types */}
                <img  src={ "/src/assets/Image/imgProducts/"+info['id']+".jpg"} alt=""/>
                {/* eslint-disable-next-line react/prop-types */}
                <h2>{info['name']} • {info['weight']} {getCount(info)}</h2>
            </Link>

            <p>{getCompound(info)}</p>

            <div className={cl.price}>
                {/* eslint-disable-next-line react/prop-types */}
                <p>{info['price']} руб.</p>
                {count !== 0 ? <Counter count={count} setCountElement={setCountElement}/>
                    :<button onClick={()=> setCountElement()}>в корзину</button>}

            </div>
        </div>
    );
};

export default Card;