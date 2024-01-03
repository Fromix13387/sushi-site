// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import cl from './Review.module.scss'
import axios from "axios";
import {url} from "../../../js/function.js";
const Review = () => {
    const [reviews, setReviews] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [grade, setGrade] = useState('')
    const [answer, setAnswer] = useState({color: 'red', text: ''})

    const getReviews = async () => {
        let res = await axios.get(url+'getReviews.php').then(res => res.data)
        setReviews(res)
    }
    const getGrade = (count) => {
        let arr = []
        for (let i = 0; i < count; i++) {
            arr.push( <img width={15} key={i} src={"/src/assets/Image/star.png"} alt=""/>)
        }
        return arr
    }

    const sendReview = async () => {
        let d = new Date()
        setReviews([...reviews, {name,description,grade, date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`}])
        let res = await axios.post(url+'addReview.php',{
                name,grade, description
        }, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.data)
        setAnswer(res)

    }
    useEffect(()=> {
        getReviews()
    }, [])

    return (
        <div className={cl.Review}>
            <h1>Отзывы</h1>

            <div className={cl.reviews}>
                {reviews.map((el,i) => <div key={i} className={cl.review}>
                    <div>
                        <h2>{el['name']} </h2>
                        <div className={cl.star}>{getGrade(el['grade'])}</div>
                    </div>
                    <p className={cl.date}>{el['date']}</p>
                    <br/>
                    <div className={cl.description}>{el['description']}</div>
                    <br/>
                    <hr/>
                </div>)}
            </div>

            <div className={cl.formReview}>
                <h2>Оставить отзыв</h2>
                <form onSubmit={() => false}>
                    <div>
                        <div className={cl.name}>
                            <p >Ваше имя:</p> <input onChange={(e)=> setName(e.target.value)} value={name} type="text" id="name"/>

                        </div>
                       <div>
                           <p>Оценка:</p>
                           <select defaultValue='1' onChange={(e)=> setGrade(e.target.value)} value={grade}  id="grade">
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                           </select>
                       </div>

                    </div>
                    <div><p>Комментарий:</p> <textarea onChange={(e)=> setDescription(e.target.value)} value={description} cols={50}  rows={5} id="description"/></div>

                    <button onClick={sendReview} type={"button"}>Опубликовать</button>

                </form>
                <p style={{color: answer.color}}>{answer.text}</p>
            </div>

        </div>
    );
};

export default Review;