import React from 'react'

import './SectionDescription.css'
import '../../form/Form.css'

const SectionDescription = () => {
    return (
        <>
            <div className="container section-description">
                <p className="call-description">A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</p>
                <div className="section-description-flex-container">
                    <div className="section-flex-item-description">
                        <div className="img-description-1"></div>
                        <div className="img-description-2"></div>
                        <div className="img-description-3"></div>
                    </div>
                    <div className="img-description-4"></div>
                </div>
                <p className="car-description">O novo Civic Geração 10 traz um design único mudando
                a categoria de sedãs para sempre. 
                Ele garante a melhor dirigibilidade com o máximo em sofisticação e conforto, 
                atribuído por seu design interno e diferenciada ergonomia.</p>
            </div>
        </>
    )
}

export default SectionDescription;