// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import img from "../../Image/arraw-left.svg";
import cl from "./Back.module.scss"

// eslint-disable-next-line react/prop-types
const Back = ({hist, children}) => {
    return (
        <h1 className={cl.Back}><Link  to={hist}><img width={15} src={img} alt=""/></Link>{children}</h1>
    );
};

export default Back;