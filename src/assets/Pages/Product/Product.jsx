import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import img from "../../Image/arraw-left-white.png";
import cl from "./Product.module.scss"
import {getCompound, getCount, url} from "../../../js/function.js";
import Counter from "../../Components/Сounter/Сounter.jsx";
import {useOrder} from "../../Hooks/useOrder.js";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Product = () => {
    let { id } = useParams();
    const hist =  sessionStorage.getItem("history");
    const [product, setProduct] = useState('')
    const [count, setCountElement] = useOrder(product)
    const getPost = async () => {
        let res = await axios.get(url+`getProduct.php?id=${id}`).then(res => res.data)
        setProduct(res)
        console.log(count)
    }
    useEffect(()=> {
        getPost()
    }, [])
    return (
        <div className={cl.Product}>
            {product === '' ? null :
                <>
                    <div className={cl.img}>
                        <Link  to={hist+"#item"+product['id']}><img width={15} src={img} alt=""/></Link>
                        {/* eslint-disable-next-line react/prop-types */}
                        <img src={"/src/assets/Image/imgProducts/"+product['id']+".jpg"} alt=""/>
                    </div>
                    <div className={cl.desc}>
                        {/* eslint-disable-next-line react/prop-types */}
                        <h2>{product['name']} • {product['weight']} {getCount(product)}</h2>
                        <p>{getCompound(product)}</p>
                        <br/>
                        {/* eslint-disable-next-line react/prop-types */}
                        {product['weight']?.includes('г') ? <p>Вес: {product['weight']}</p> : null}
                        {/* eslint-disable-next-line react/prop-types */}
                        {product['count']?.includes('шт') ? <p>Количество: {product['count']}</p> : null}
                        <div className={cl.item_buy}>
                            {/* eslint-disable-next-line react/prop-types */}
                            <p>{product['price']}.00 руб</p>
                            {count !== 0 ? <Counter count={count} setCountElement={setCountElement}/>
                                :<button onClick={()=> setCountElement()}>в корзину</button>}
                        </div>
                    </div>
                </>
                }
        </div>
    );
};

export default Product;