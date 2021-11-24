import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import logo from '../assets/images/Logo-2.png'
import { useSelector } from 'react-redux';

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Nữ",
        path: "/catalog"
    },
    {
        display: "Nam",
        path: "/men"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    const {
        logoutUser,
        authState: { isAuthenticated },
    } = useContext(AuthContext);
    const logout = () => logoutUser();

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)
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
                        {
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
                        }
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


                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-world"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
