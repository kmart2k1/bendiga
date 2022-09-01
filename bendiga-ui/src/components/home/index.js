import React from 'react'
import mobile from 'is-mobile'
import HomePageMobile from './mobile'
import HomePageDesktop from './desktop'

const HomePage = ({}) => {

    let isMobile = mobile()
    return isMobile ? <HomePageMobile/> : <HomePageDesktop/>
}

export default HomePage