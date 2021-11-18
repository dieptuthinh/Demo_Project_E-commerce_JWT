import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Success from '../pages/Success'
import Product from '../pages/Product'


import Auth from '../pages/Auth'
import ProtectedRoute from "../components/routing/ProtectedRoute";


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
        
            <Route path='/catalog/:slug' component={Product} />
            <Route path='/catalog' component={Catalog} />
            <Route
                exact
                path="/login"
                render={(props) => <Auth {...props} authRoute="login" />}
            />
            <Route
                exact
                path="/register"
                render={(props) => <Auth {...props} authRoute="register" />}
            /> 
            <Route path='/cart' component={Cart} />
            <ProtectedRoute path='/success' component={Success} />

        </Switch>
    )
}

export default Routes