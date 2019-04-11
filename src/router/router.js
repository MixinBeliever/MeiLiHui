import React from 'react'

import { BrowserRouter as Router, Route, } from 'react-router-dom';

import App from '../App'

import Home from '../views/Home/home'
import Silo from '../views/Silo/silo'
import Women from '../views/Women/women'
import Men from '../views/Men/men'

import Cosmetics from '../views/Cosmetics/cosmetics'
import Lifestyle from '../views/Lifestyle/lifestyle'
import Kids from '../views/Kids/kids'
import Upcoming from '../views/Upcoming/upcoming'


const routes = (

    <Router>
        <App>
            <Route path="/home" component={Home}></Route>
            <Route path="/silo" component={Silo}></Route>
            <Route path="/women" component={Women}></Route>
            <Route path="/men" component={Men}></Route>

            <Route path="/cosmetics" component={Cosmetics}></Route>
            <Route path="/lifestyle" component={Lifestyle}></Route>
            <Route path="/kids" component={Kids}></Route>
            <Route path="/upcoming" component={Upcoming}></Route>
        </App>
    </Router>
)

export default routes