import React from 'react'
import './SectionInsideDescription.css'

import ImageGallery from './imageGallery/ImageGallery'

const SectionInsideDescription = () =>{
    return(
        <div className="inside-description-container">
            <div className="inside-banner"></div>
            <div className="inside-banner-mobile">
                <p className="description1-banner-mobile">PREPARE-SE PARA ALGO REALMENTE NOVO</p>
                <p className="description2-banner-mobile">O Novo Civic Geração 10 vem completo de série. Conheça a versão perfeita para você.</p>
            </div>
            <ImageGallery />
        </div>
    )
}

export default SectionInsideDescription;