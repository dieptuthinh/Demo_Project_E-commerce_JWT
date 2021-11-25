import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'
import { useTranslation } from "react-i18next";


const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]
const Footer = () => {
    const { t } = useTranslation();

    return (
        <>

                <div className="">
                    <footer className="footer">
                        <div className="wrapper">
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={10}
                        >
                            <div>
                                <div className="footer__title">
                                    {t("support")}
                                </div>
                                <div className="footer__content">
                                    <p>
                                        {t("contactTo")} <strong>0123456789</strong>
                                    </p>
                                    <p>
                                        {t("problem")} <strong>0123456789</strong>
                                    </p>
                                    <p>
                                        {t("comment")} <strong>0123456789</strong>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="footer__title">
                                    {t("about")}
                                </div>
                                <div className="footer__content">
                                    {
                                        footerAboutLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="footer__title">
                                    {t("care")}
                                </div>
                                <div className="footer__content">
                                    {
                                        footerCustomerLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="footer__about">
                                <p>
                                    <Link to="/">
                                        <img src={logo} className="footer__logo" alt="" />
                                    </Link>
                                </p>
                                <p>
                                    {t("aboutDes")}
                                </p>
                            </div>
                        </Grid>
                        </div>
                    </footer>
                </div>

        </>
    )
}

export default Footer
