import React from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
    return (
       
       <div className="container gallery-flex-container">
           <div className="gallery-item-1">
                <div className="img-gallery-1"></div>
                <p className="gallery-item-subtitle">Direção com Assistência</p>
                <p className="gallery-item-description">Sistema de estabilidade que reforça automaticamente o retorno da direção, 
                auxiliando o motorista em situações onde o carro está ameaçado de instabilidade.</p>
           </div>
           <div className="gallery-item-2">
                <div className="img-gallery-2"></div>
                <p className="gallery-item-subtitle">Vidros elétricos com subida</p>
                <p className="gallery-item-description">Todas as portas possuem vidros elétricos com a função “um toque” e sistema de segurança antiesmagamento.</p>
           </div>
           <div className="gallery-item-3">
                <div className="img-gallery-3"></div>
                <p className="gallery-item-subtitle">Câmbio CVT com Paddle Shift</p>
                <p className="gallery-item-description">O câmbio com transmissão CVT de 7 velocidade com Paddle Shift (aletas) proporciona conforto ao trocar de marchas.</p>
           </div>
       </div>
    )
}

export default ImageGallery;