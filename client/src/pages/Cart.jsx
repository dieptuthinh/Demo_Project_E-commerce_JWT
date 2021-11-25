import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'
import { useTranslation } from "react-i18next";


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)
    const { t } = useTranslation();
    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <>
            <Helmet title={t("cartTitle")}>
                <div className="cart">
                    <div className="cart__info">
                        <div className="cart__info__txt">
                            <p>
                                {t("available", { totalProducts })}
                            </p>
                            <div className="cart__info__txt__price">
                                <span>{t("intoMoney")}:</span> <span>{numberWithCommas(Number(totalPrice))} {t("currency") }</span>
                            </div>
                        </div>
                        <div className="cart__info__btn">
                            <Link to="/checkout">
                                <Button size="block">
                                    {t("orderBtn")}
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="cart__info__btn">
                            <Link to="/catalog">
                                <Button size="block">
                                    {t("continueBtn")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="cart__list">
                        {
                            cartProducts.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </Helmet>
        </>
    )
}

export default Cart
