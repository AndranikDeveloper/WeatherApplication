import React from 'react'
import './style.css'
import Search from './Search'
import SwitchTemprature from './SwitchTemprature'

const Inputs = () => {
    return (
        <div className='inputs'>
            <Search />
            <SwitchTemprature />
        </div>
    )
}

export default Inputs