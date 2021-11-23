import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Men from '../pages/Men'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Product from '../pages/Product'
import MenProduct from '../pages/MenProduct'
import Contact from '../pages/Contact'

import Auth from '../pages/Auth'
import ProtectedRoute from "../components/routing/ProtectedRoute";


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
        
            <Route path='/catalog/:slug' component={Product} />
            <Route path='/men/:slug' component={MenProduct} />
            <Route path='/contact' component={Contact} />

            <Route path='/catalog' component={Catalog} />
            <Route path='/men' component={Men} />
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
            <ProtectedRoute path='/checkout' component={Checkout} />

        </Switch>
    )
}

export default Routes