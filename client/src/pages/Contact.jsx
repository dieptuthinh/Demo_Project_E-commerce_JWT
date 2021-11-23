import React from 'react'
import Helmet from '../components/Helmet'
import { Link } from "react-router-dom";
import Map from '../components/Map';
// import map from '../assets/images/map.png'
const Contact = () => {
    const key = "AIzaSyA6NgdI9XsU7MrsbkhVD3qNb0UT_reNnaw";

    return (
        <>
            <Helmet title="Liên hệ">
                <div className="contact">
                    <div className="contact__header">
                        <h1 className="contact__header__title">Liên hệ</h1>
                    </div>
                    <div className="contact__body">
                        <div className="row gy-4 contact__body__info ">
                            <div className="contact__body__info-address col-12 col-md">

                                <div className="contact__body__info-address__icon">
                                    <i className='bx bxs-map'></i>
                                </div>
                                <div className="contact__body__info-address__content">
                                    <p className="contact__body__info-address__content__title">Địa chỉ: </p>
                                    <p>
                                        Công ty CP Thời Trang YODY, đường An Định, TP. Hải Dương
                                        <p>(dưới chân cầu Đồng Niên)</p>
                                    </p>
                                </div>
                            </div>

                            <div className="contact__body__info-email col-12 col-md">
                                <div className="contact__body__info-email__icon">
                                    <i className='bx bx-question-mark'></i>
                                </div>
                                <div className="contact__body__info-email__content">
                                    <p className="contact__body__info-address__content__title">Gửi thắc mắc:</p>
                                    <p><Link to="/contact">chamsockhachhang@yody.vn </Link></p>
                                </div>
                            </div>

                            <div className="contact__body__info-phone col-12 col-md">
                                <div className="contact__body__info-phone__icon">
                                    <i className='bx bxs-phone' ></i>
                                </div>
                                <div className="contact__body__info-phone__content">
                                    <p className="contact__body__info-address__content__title">Điện thoại</p>
                                    <p><Link to="/contact">024 730 56665</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form row">
                        <div className="contact__form__map col-12 col-sm-4">
                            <div>
                                {/* <img src={map} alt="" /> */}
                                <Map
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={
                                        <div
                                            style={{
                                                height: `550px`,
                                                width: `99%`,
                                            }}
                                        />
                                    }
                                    mapElement={<div style={{ height: `100%` }} />} />
                            </div>
                        </div>
                        <div className="contact__form__form col-12 col-sm-8 ">
                            <form action="">
                                <div className="contact__form__form__row row">
                                    <div className=" col-12 col-md-6 mt-md-0 mt-3">
                                        <label className="contact__form__form__label">
                                            Họ và tên <em>*</em>
                                        </label>
                                        <div>
                                            <input className="form-control form-control-lg" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mt-md-0 mt-3">

                                        <label className="contact__form__form__label">
                                            Email <em>*</em>
                                        </label>

                                        <div>
                                            <input className="form-control  form-control-lg" type="text" />
                                        </div>
                                    </div>

                                </div>
                                <div className="contact__form__form__row row">
                                    <div className="col-12 ">
                                        <label className="contact__form__form__label">
                                            Nội dung <em>*</em>
                                        </label>
                                        <div>
                                            <textarea name="" id="" className="form-control area form-control-lg" rows={5}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact__form__form__row row">
                                    <div className="col-12">
                                        <button className="contact__form__form__button">Gửi liên hệ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Helmet>
        </>
    )
}

export default Contact
