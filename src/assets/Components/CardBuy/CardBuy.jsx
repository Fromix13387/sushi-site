// import img from "../../Image/arraw-left.svg";
import {getCount} from "../../../js/function.js";
import {useOrder} from "../../Hooks/useOrder.js";
import Counter from "../Сounter/Сounter.jsx";
import React from "react";
import cl from "./CardBuy.module.scss"
// eslint-disable-next-line react/prop-types
const CardBuy = ({info}) => {
    const [count, setCountElement, order] = useOrder(info)
    return (
        <tr className={cl.CardBuy}>
            {/* eslint-disable-next-line react/prop-types */}
            <td><img width={100} src={ "/src/assets/Image/imgProducts/"+ info['id'] + '.jpg'} alt=""/></td>
            <td>
                {/* eslint-disable-next-line react/prop-types */}
                <h2>{info['name']} • {info['weight']} {getCount(info)}</h2>
                <div>
                    <Counter count={count} setCountElement={setCountElement}/>
                    <p>{order.getSum(info)}.00 руб.</p>
                </div>
            </td>

        </tr>
    );
};

export default CardBuy;