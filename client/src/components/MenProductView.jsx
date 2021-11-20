import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import { remove } from '../redux/product-modal/productModalSlice'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const MenProductView = props => {
    const dispatch = useDispatch()
    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        delPrice: '',
        image01: null,
        image02: null,
        image03: null,
        image04: null,
        image05: null,
        image06: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }
    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                alert('Success')
            } else {
                alert('Fail')
            }
        }
    }

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                props.history.push('/cart')
            } else {
                alert('Fail')
            }
        }
    }

    return (
        <div className="men__product">
            <div className="men__product__images">
                <div className="men__product__images__list">
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image03)}>
                        <img src={product.image03} alt="" />
                    </div>
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image04)}>
                        <img src={product.image04} alt="" />
                    </div>
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image05)}>
                        <img src={product.image05} alt="" />
                    </div>
                    <div className="men__product__images__list__item" onClick={() => setPreviewImg(product.image06)}>
                        <img src={product.image06} alt="" />
                    </div>
                </div>
                <div className="men__product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`men__product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="men__product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="men__product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="men__product-description__toggle">
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="men__product__info">
                <h1 className="men__product__info__title">{product.title}</h1>
                <div className="men__product__info__item">
                    <span className="men__product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="men__product__info__item">
                    <div className="men__product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="men__product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <div key={index} className={`men__product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bgc-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="men__product__info__item">
                    <div className="men__product__info__item__title">
                        Kích cỡ
                    </div>
                    <div className="men__product__info__item__list">
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={`men__product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="men__product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="men__product__info__item">
                    <div className="men__product__info__item__title">
                        Số lượng
                    </div>
                    <div className="men__product__info__item__quantity">
                        <div className="men__product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="men__product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="men__product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="men__product__info__item">
                    <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
                    <Button onClick={() => goToCart()}>mua ngay</Button>
                </div>
            </div>
            <div className={`men__product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="men__product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="men__product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                <div className="men__product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

MenProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(MenProductView)
