import React from 'react'
import './SectionInsideDescription.css'

import ImageGallery from './imageGallery/ImageGallery'

const SectionInsideDescription = () =>{
    return(
        <div className="inside-description-container">
            <div className="inside-banner"></div>
            <ImageGallery />
        </div>
    )
}

export default SectionInsideDescription;