import React, {useState} from 'react'
import mobile from 'is-mobile'
import MobileHeader from './mobile'
import DesktopHeader from './desktop'

const Header = ({}) => {
    return mobile() ? <MobileHeader/>: <DesktopHeader/>
}

export default Header