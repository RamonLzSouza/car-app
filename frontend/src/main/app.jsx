import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Car from '../car/car'
import About from '../about/about'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu/>
        <Routes/>
        
    </div>
)
