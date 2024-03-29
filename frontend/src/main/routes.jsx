import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Car from '../car/car'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cars' component={Car} />
        <Route path='/about' component={About} />
        <Redirect from= '*' to='/cars' />
    </Router>
)