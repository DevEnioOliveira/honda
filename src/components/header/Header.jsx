import React from 'react';

import Topbar from './topbar/Topbar'
import HeaderNav from './headerNav/HeaderNav'
import BannerHeader from './bannerHeader/BannerHeader'

const Header = () => {
    return(
        <header>
            <Topbar />
            <HeaderNav />
            <BannerHeader />
        </header>
    )
}

export default Header;