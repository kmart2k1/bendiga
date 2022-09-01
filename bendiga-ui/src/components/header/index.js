import React, {useState} from 'react'
import mobile from 'is-mobile'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'
import {useLocation} from 'react-router-dom'
const Header = ({}) => {
    const location = useLocation()
    return mobile() ? <MobileHeader/>: location.pathname==='/' ? null : <DesktopHeader/>
}

export default Header