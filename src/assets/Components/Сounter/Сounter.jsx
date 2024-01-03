// eslint-disable-next-line no-unused-vars
import React from 'react';
import cl from "./Сounter.module.scss";

const Counter = ({count,setCountElement}) => {
    return (
        <div className={cl.item_buy}>
            <div onClick={()=>setCountElement('-')}>-</div>
            <p>{count}</p>
            <div  onClick={() => setCountElement('+')}>+</div>
        </div>
    );
};

export default Counter;