import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'
const CartCheckoutItem = props => {

    const itemRef = useRef(null)

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])





    return (
        <div className="checkout__item__list" ref={itemRef}>
            <div className="checkout__item__list__r">

                <div className="checkout__item__list__image">
                    <img src={item.product.image01} alt="" />
                </div>

                <div className="checkout__item__list__info">
                    <div className="checkout__item__list__info__name">
                        <Link to={`/catalog/${item.slug}`}>
                            {`${item.product.title} - ${item.color} - ${item.size}`}
                        </Link>
                    </div>
                    <div className="checkout__item__list__info__quantity">

                       <span>Số lượng: </span> {quantity}

                    </div>
                </div>

            </div>
            <div className="checkout__item__list__l text-end">
                <div className="checkout__item__list__price">
                    {numberWithCommas(item.price)}đ 
                </div>
                <del className="checkout__item__list__price-del">
                    {numberWithCommas(399000)}đ
                </del>
            </div>

        </div>
    )
}

CartCheckoutItem.propTypes = {
    item: PropTypes.object
}

export default CartCheckoutItem
