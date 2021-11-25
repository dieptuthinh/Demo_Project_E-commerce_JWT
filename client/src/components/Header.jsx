import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import logo from '../assets/images/Logo-2.png'
import { useSelector } from 'react-redux';

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

// const mainNav = [
//     {
//         display: "Trang chủ",
//         path: "/"
//     },
//     {
//         display: "Nữ",
//         path: "/catalog"
//     },
//     {
//         display: "Nam",
//         path: "/men"
//     },
//     {
//         display: "Liên hệ",
//         path: "/contact"
//     }
// ]

const languages = [
    {
        code: "vn",
        name: "Vietnames",
        country_code: "vn",
    },
    {
        code: "en",
        name: "English",
        country_code: "gb",
    },
];
const Header = () => {
    const {
        logoutUser,
        authState: { isAuthenticated },
    } = useContext(AuthContext);
    const logout = () => logoutUser();

    const { pathname } = useLocation()


    const currentLanguageCode = cookies.get("i18next") || "en";
    const { t } = useTranslation();
    
    // const activeNav = mainNav.findIndex(e => e.path === pathname)
    console.log(pathname);
    
    const cartItems = useSelector((state) => state.cartItems.value)
    const [totalProducts, setTotalProducts] = useState(0)

    const headerRef = useRef(null)




    useEffect(() => {
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            // window.location.reload();
            window.removeEventListener("scroll", null)
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="wrapper">
                <div className="header__logo">
                    <Link to="/home">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {/* {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        } */}
                        {/* ------------------------------------------------------------------------------------------------------- */}
                        <div
                            className={`header__menu__item header__menu__left__item ${t("pathHome") === pathname ? 'active' : ''}`}
                            onClick={menuToggle}
                        >
                            <Link to={t("pathHome")}>
                                <span>{t('home') }</span>
                            </Link>
                        </div>
                        <div
                            className={`header__menu__item header__menu__left__item  ${t("pathWomen") === pathname ? 'active' : ''}`}
                            onClick={menuToggle}
                        >
                            <Link to={t("pathWomen")}>
                                <span>{t('women')}</span>
                            </Link>
                        </div>
                        <div
                            className={`header__menu__item header__menu__left__item  ${t("pathMen") === pathname ? 'active' : ''}`}
                            onClick={menuToggle}
                        >
                            <Link to={t("pathMen")}>
                                <span>{t('men')}</span>
                            </Link>
                        </div>
                        <div
                            className={`header__menu__item header__menu__left__item  ${t("pathContact") === pathname ? 'active' : ''}`}
                            onClick={menuToggle}
                        >
                            <Link to={t("pathContact")}>
                                <span>{t('contact')}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="header__menu__right">

                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart" className="header__menu__right__item-cart">
                                <i className="bx bx-shopping-bag"></i>
                                {
                                    totalProducts !== 0 &&
                                    <>
                                        <span className="header__menu__right__item-cart__badge start-100 translate-middle badge rounded-circle">
                                            {totalProducts}
                                        </span>
                                    </>
                                }

                            </Link>
                        </div>
                        {
                            isAuthenticated ?
                                <>
                                    <div className="header__menu__item header__menu__right__item">
                                        <i className="bx bx-user"></i>
                                    </div>
                                    <div className="header__menu__item header__menu__right__item ">
                                        <Link to="/login" onClick={logout} >
                                            <i className="bx bx-log-out"></i>

                                        </Link>
                                    </div>
                                </>
                                :
                                <div className="header__menu__item header__menu__right__item">
                                    <Link to="/login">
                                        <i className="bx bx-log-in"></i>
                                    </Link>
                                </div>
                        }


                        <div className="header__menu__item header__menu__right__item dropdown">
                            <div className="header__menu__right__item_language " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bx bx-world"></i>
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {languages.map(({ code, name, country_code }) => (
                                    <li
                                        key={country_code}>
                                        <div
                                            className={classNames("dropdown-item", {
                                                disabled: currentLanguageCode === code,
                                            })}
                                            
                                            onClick={() => {
                                                i18next.changeLanguage(code);
                                            }}>
                                            <span
                                                className={`flag-icon flag-icon-${country_code} me-3`}
                                                style={{
                                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                                }}
                                            ></span>
                                            <span>
                                                {name}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
