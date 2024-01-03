import { Route, Routes,  BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from "./assets/Components/Header/Header.jsx";
import Menu from "./assets/Pages/Menu/Menu.jsx";
import Gifts from "./assets/Pages/Gifts/Gifts.jsx";
import About from "./assets/Pages/About/About.jsx";
import Review from "./assets/Pages/Review/Review.jsx";
import Payment from "./assets/Pages/Payment/Payment.jsx";
import {createContext, useState} from "react";
import store from "store"
import Basket from "./assets/Pages/Basket/Basket.jsx";
import Product from "./assets/Pages/Product/Product.jsx";
import Placing from "./assets/Pages/Placing/Placing.jsx";
import Pay from "./assets/Pages/Pay/Pay.jsx";

export const OrderUser = createContext(null)
function App() {
    let a = store.get('user') ?  store.get('user') : {
        goods: [],
        promo: 0
    }
  const [order, setOrder] = useState({
      ...a,
          resultSum() {
              return this?.goods.reduce((acc,el) => acc+(el['price']*el['amount']), 0)
          },
          resultCount() {
              return this.goods.reduce((acc,el) => acc+el['amount'], 0)
          },
          getSum(element) {
              return this?.goods.reduce((acc,el) => {
                  acc += element['id'] === el['id'] ? + el['price']*el['amount'] : 0
                  return  acc
              }, 0)
          }

      });
  return (
        <OrderUser.Provider value={{
            order,setOrder
        }}>
            <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Header/>} path="/">
                        <Route element={<Menu/>} index/>
                        <Route element={<Gifts/>}  path="gifts"/>
                        <Route element={<About/>}  path="about"/>
                        <Route element={<Review/>}  path="review"/>
                        <Route element={<Payment/>}  path="payment"/>
                        <Route element={<Basket/>}  path="basket"/>
                        <Route element={<Product/>}  path="product/:id"/>
                        <Route element={<Placing/>}  path="placing/"/>
                        <Route element={<Pay/>}  path="pay/"/>
                    </Route>
                </Routes>
            </BrowserRouter>
            </div>
        </OrderUser.Provider>
  )
}

export default App
