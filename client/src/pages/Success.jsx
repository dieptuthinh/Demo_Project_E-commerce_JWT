import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'
import CartCheckoutItem from '../components/CartCheckoutItem'


const Success = () => {
    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))


    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))

    }, [cartItems])
    return (
        <>
            <Helmet title="Check out">
                <div className="checkout">
                    <div className="row">
                        <div className="col-md-6 col-12 checkout__r">
                            <div className="checkout__info">
                                <div className="checkout__info__title">
                                    <h2 >Thông tin giao hàng</h2>
                                </div>

                                <div className="checkout__info__form my-4">
                                    <form action="" className="row g-4">

                                        <div className="col-md-12">
                                            <input type="text" className="form-control p-2" placeholder="Họ tên" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control p-2" placeholder="Số điện thoại" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control p-2" placeholder="Địa chỉ" />
                                        </div>
                                        <div className="col-md-4" >
                                            <select className="form-select p-2">
                                                <option selected>Tỉnh/Thành phố</option>
                                                <option value="Nha Trang">Nha Trang</option>
                                                <option value="Hà Nội">Hà Nội</option>
                                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                                <option value="...">...</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4" >
                                            <select className="form-select p-2">
                                                <option selected>Quận/Huyện</option>
                                                <option value="Nha Trang">Nha Trang</option>
                                                <option value="Hà Nội">Hà Nội</option>
                                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                                <option value="...">...</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4" >
                                            <select className="form-select p-2">
                                                <option selected>Phường/Xã</option>
                                                <option value="Nha Trang">Nha Trang</option>
                                                <option value="Hà Nội">Hà Nội</option>
                                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                                <option value="...">...</option>
                                            </select>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="checkout__pay-method">
                                <div className="checkout__pay-method__title">
                                    <h2 >Phương thức thanh toán</h2>
                                </div>
                                <div className="border px-5 my-4">
                                    <div className="form-check my-4">
                                        <input className="form-check-input" name="method_check" type="radio" checked />
                                        <label className="form-check-label ms-3">
                                            <span>Thanh toán khi nhận hàng (COD)</span>
                                        </label>

                                    </div>
                                    <div className="form-check my-4">
                                        <input className="form-check-input" name="method_check" type="radio" />
                                        <label className="form-check-label ms-3">
                                            <span>Thanh toán qua VNPAY (ATM/ VISA/ MASTER/ QR Code)</span>
                                        </label>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 checkout__l">
                            <div className="checkout__item">
                                {
                                    cartProducts.map((item, index) => (
                                        <CartCheckoutItem item={item} key={index} />
                                    ))
                                }
                            </div>
                            <hr className="line" />
                            <div className="checkout__discount">
                                <p className="checkout__discount__text">Bạn có mã giảm giá? Vui lòng nhập tại đây!</p>
                                <div className="row g-4">
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                    </div>
                                    <div className="col-md-2">
                                        <button className="checkout__discount__btn">
                                            Sử dụng
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="line" />
                            <div className="checkout__summary">
                                <div className="checkout__summary__l">
                                    <div className="checkout__summary__total">
                                        Tạm tính
                                    </div>
                                    <div className="checkout__summary__discount">
                                        Chiết khấu
                                    </div>
                                    <div className="checkout__summary__shipping">
                                        Phí vận chuyển
                                    </div>
                                </div>
                                <div className="checkout__summary__r text-end">
                                    <div className="checkout__summary__total-price">
                                        <span>{numberWithCommas(Number(totalPrice))}</span>đ
                                    </div>
                                    <div className="checkout__summary__total-price">
                                        <span>{numberWithCommas(Number(totalPrice * 0.2))}</span>đ
                                    </div>
                                    <div className="checkout__summary__total-price">
                                        <span>Free</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="line" />
                            <div className="checkout__final__total">
                                <div className="checkout__final__total_text">
                                    Cần thanh toán
                                </div>
                                <div className="checkout__final__total_price">
                                    <span>{numberWithCommas(Number(totalPrice))}</span>đ
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 text-end">
                            <div className="col-12">
                                <Button size="sm">Hoàn tất đơn hàng</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </Helmet>
        </>
    )
}



export default Success
