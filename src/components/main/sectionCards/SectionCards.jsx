import React from 'react'

import './SectionCards.css'

const SectionCards = () => {


    return (
        <div className="container sectionCards-flex-container">
            <p className="sectionCards-title">PRONTO PARA TER UM HONDA?</p>
            <p className="sectionCards-description">Conheça os últimos grandes lançamentos da honda.</p>
            <div className="cards-flex-container">
                <div className="cards-item-1">
                    <div className="cards-img-1"></div>
                    <p className="cards-description">Novo Honda Accord: a combinação perfeita de três atributos exigidos pelo consumidor: 
                    elegância, luxo e alto desempenho.</p>
                    <div className="card-buttom">
                        <p className="buttom-description">CONHEÇA MAIS</p>
                    </div>
                </div>
                <div className="cards-item-2">
                    <div className="cards-img-2"></div>
                    <p className="cards-description">O City está muito mais moderno e esportivo. 
                    Com design único e mais tecnológico do que nunca, ele vai conquistar todos os olhares.</p>
                    <div className="card-buttom" >
                        <p className="buttom-description">CONHEÇA MAIS</p>
                    </div>
                </div>
                <div className="cards-item-3">
                    <div className="cards-img-3"></div>
                    <p className="cards-description">Com seu design inconfundível, o novo Honda Fit traz novidades que vão surpreender a todos e atrair ainda mais fãs.</p>
                    <div className="card-buttom" id="last-card-button">
                        <p className="buttom-description">CONHEÇA MAIS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCards;