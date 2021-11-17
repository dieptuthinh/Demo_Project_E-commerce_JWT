import React from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthContextProvider from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
// import Home from "../pages/Home"
// import Product from "../pages/Product"
// import Catalog from '../pages/Catalog'
// import Cart from '../pages/Cart'
// import Auth from '../pages/Auth'
// import Landing from '../components/Landing'
// import Dashboard from "../pages/Dashboard";

// import ProtectedRoute from "./components/routing/ProtectedRoute";

import Header from './Header'
import Footer from '../components/Footer'
import ProductViewModal from '../components/ProductViewModal'

import Routes from '../routes/Routes'


const Layout = () => {


    return (
        <AuthContextProvider>
            <ToastContainer />

            <Router>
                <Route render={props => (
                    <div>
                        <Header {...props} />
                        <div className="container">
                            <div className="main">
                                <Routes />
                            </div>
                        </div>
                        <Footer />
                        <ProductViewModal />
                    </div>
                )} />
            </Router>
        </AuthContextProvider>
    )
}

export default Layout
