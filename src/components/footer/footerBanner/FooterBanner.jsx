import React from 'react'

import './FooterBanner.css'

const FooterBanner = () => {
    return (
        <div className="footerBanner-flex-container">
            <div className="footer-description-container">
                <div className="footer-item-1">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="26.867" 
                    height="39.494" 
                    viewBox="0 0 26.867 39.494">
                    <path className="a2" d="M93.137,9.83a12.394,12.394,0,0,0-.629-1.58,13.325,13.325,0,0,0-25.6,4v1.685c0,.07.024.7.058,1.018.486,3.931,3.549,8.11,5.837,12.041,2.461,4.212,5.016,8.356,7.546,12.5,1.56-2.7,3.115-5.441,4.64-8.074.416-.773.9-1.545,1.314-2.282.277-.491.807-.982,1.049-1.439,2.461-4.563,6.423-9.162,6.423-13.691v-1.86A14.153,14.153,0,0,0,93.137,9.83ZM80.265,18.29a4.77,4.77,0,0,1-4.565-3.3,4.634,4.634,0,0,1-.128-1.229V12.673c0-3.089,2.59-4.493,4.843-4.493a4.942,4.942,0,0,1,4.919,5.056A5.067,5.067,0,0,1,80.265,18.29Z" transform="translate(-66.905)"/>
                    </svg>
                    <div className="description-item1-container">
                        <p className="footer-item1-description1">Encontre uma</p>
                        <p className="footer-item2-description2">CONCESSIONÁRIA</p>
                    </div>
                </div>

                <div className="footer-item-2">
                        <p className="footer-item3-description3">CENTRAL DE ATENDIMENTO</p>
                        <p className="footer-item4-description4">(31) 3123-1234</p>
                </div>               
            </div>
            <p className="footer-social-title">SIGA A BANZAI NAS REDES SOCIAIS</p>
            <div className="social-icon-container">
                <div className="bg-facebook">
                    <svg xmlns="http://www.w3.org/2000/svg"
                            width="12.032" 
                            height="26.098" 
                            viewBox="0 0 12.032 26.098"><path className="a-facebook" d="M49.359,34.787H45.791V47.861H40.384V34.787H37.812V30.192h2.572V27.219c0-2.126,1.01-5.456,5.455-5.456l4.005.017v4.46H46.938a1.1,1.1,0,0,0-1.147,1.252v2.7h4.041Z" transform="translate(-37.812 -21.763)"/></svg>
                </div>
                <div className="bg-instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="18.824" 
                        height="18.824" 
                        viewBox="0 0 18.824 18.824"><path className="a-instagram" d="M39.132,23.88H27.21a3.455,3.455,0,0,0-3.451,3.451V39.253A3.455,3.455,0,0,0,27.21,42.7H39.132a3.455,3.455,0,0,0,3.451-3.452V27.331A3.455,3.455,0,0,0,39.132,23.88ZM33.171,39.489a6.2,6.2,0,1,1,6.2-6.2A6.2,6.2,0,0,1,33.171,39.489Zm6.4-11.113a1.466,1.466,0,1,1,1.466-1.466A1.468,1.468,0,0,1,39.567,28.377Z" transform="translate(-23.759 -23.88)"/></svg>
                </div>
                <div className="bg-twitter">
                     <svg xmlns="http://www.w3.org/2000/svg" 
                        width="23.301" 
                        height="18.937" 
                        viewBox="0 0 23.301 18.937"><g transform="translate(0 0)"><path className="a-twitter" d="M48.4,36.27a9.538,9.538,0,0,1-2.746.752,4.794,4.794,0,0,0,2.1-2.644,9.57,9.57,0,0,1-3.036,1.16A4.785,4.785,0,0,0,36.579,39.9a13.57,13.57,0,0,1-9.854-5A4.786,4.786,0,0,0,28.2,41.285a4.747,4.747,0,0,1-2.165-.6c0,.02,0,.041,0,.061a4.783,4.783,0,0,0,3.835,4.687,4.8,4.8,0,0,1-2.159.083,4.786,4.786,0,0,0,4.466,3.32A9.65,9.65,0,0,1,25.1,50.816,13.6,13.6,0,0,0,46.032,39.362c0-.207,0-.414-.014-.618A9.694,9.694,0,0,0,48.4,36.27Z" transform="translate(-25.103 -34.028)"/></g></svg>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner;