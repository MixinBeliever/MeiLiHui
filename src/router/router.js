import React from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch, } from 'react-router-dom';

import App from '../App'

import Home from '../views/Home/home'
import Brand from '../views/Brand/brand'

import Silo from '../views/Silo/silo'
import Women from '../views/Women/women'
import Men from '../views/Men/men'

import Cosmetics from '../views/Cosmetics/cosmetics'
import Lifestyle from '../views/Lifestyle/lifestyle'
import Kids from '../views/Kids/kids'
import Upcoming from '../views/Upcoming/upcoming'


import Login from '../views/Login/login'
import Loginaccount from '../views/Login/Loginaccount/loginaccount'
import Loginmobile from '../views/Login/Loginmobile/loginmobile'





const routes = (

    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/brand" component={Brand}></Route>


                <Route path="/silo" component={Silo}></Route>
                <Route path="/women" component={Women}></Route>
                <Route path="/men" component={Men}></Route>
                <Route path="/cosmetics" component={Cosmetics}></Route>
                <Route path="/lifestyle" component={Lifestyle}></Route>
                <Route path="/kids" component={Kids}></Route>
                <Route path="/upcoming" component={Upcoming}></Route>
                

                <Route path="/login" render={()=>
                    <Login>
                        <Switch>
                            <Route path="/login/account" component={Loginaccount}></Route>
                            <Route path="/login/moblie" component={Loginmobile}></Route>
                            <Redirect from="/login" to="/login/account"></Redirect>
                        </Switch>
                    </Login>
                    }>
                </Route>
                

                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </App>
    </Router>
)

export default routes