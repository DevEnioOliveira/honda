import React from 'react'

import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <div className="container  flex-container-nav">
            <div className="nav-flex-container"></div>           
            <div className="flex-header-item-2">
                <p className="atendimento-header">central de atendimento</p>
                <p className="numero-atendimento-header">(31)3123-1234</p>
            </div>
        </div>
    )
}


export default HeaderNav;