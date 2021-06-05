import React from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
    return (
       
       <div className="container gallery-flex-container">
           <div className="gallery-item-1">
                <div className="img-gallery-1"></div>
                <p className="gallery-item-subtitle"></p>
                <p className="gallery-item-description"></p>
           </div>
           <div className="gallery-item-1">
                <div className="img-gallery-2"></div>
                <p className="gallery-item-subtitle"></p>
                <p className="gallery-item-description"></p>
           </div>
           <div className="gallery-item-1">
                <div className="img-gallery-2"></div>
                <p className="gallery-item-subtitle"></p>
                <p className="gallery-item-description"></p>
           </div>
       </div>
    )
}

export default ImageGallery;