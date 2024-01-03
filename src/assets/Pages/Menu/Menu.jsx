import React, {useEffect, useRef, useState} from 'react';
import cl from "./Menu.module.scss"
import axios from 'axios'
import Card from "../../Components/Card/Card.jsx";
import {useLocation} from "react-router-dom";
import {url} from "../../../js/function.js";
const Menu = () => {
    const el = useRef(null);
    const [catalog, setCatalog] = useState([])
    const [products, setProducts] = useState([])
    let l = useLocation();
    const getPost = async () => {
        let res = await axios.get(url+'getProducts.php').then(res => res.data)
        let arr= []
        for (let key in res) {
            arr.push(key)
        }
        setCatalog(arr)
        setProducts(res)

    }

    useEffect(()=> {
        getPost()
        // console.log(l)
        // if (l.hash.includes('item')) {
        //     // console.log(el)
        //     console.log(document.querySelector('#item1'))
        // }
    }, [])
    return (
        <div className={cl.Menu}>
            <div className={cl.catalog + " x-scroll"}>
                {catalog.length !== 0 ?
                    catalog.map((el, index) => <a href={'#'+index} key={index}>
                        {el}
                    </a>)
                    : null}
            </div>
            <div className={cl.products} ref={el}>
                {catalog.length !== 0 ?
                    catalog.map((el, index) => <div id={index} className={cl.product} key={index}>
                        <h2>{el} <span>{products[el].length}</span></h2>
                        <div className={cl.card}>
                            {products[el].map((info) =><Card  key={info['id']} info={info}/>)}
                        </div>
                    </div>)
                    : null}
            </div>
        </div>
    );
};

export default Menu;