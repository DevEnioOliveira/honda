import React from 'react'

import './Topbar.css'


const Topbar = () => {
    return (
        <div className="topbar">
            <div className="container flex-container-1">
                <div className="flex-item">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20.177" 
                        height="17.151" 
                        viewBox="0 0 20.177 17.151">
                        <g className="a" transform="translate(0 -38.25)"><g transform="translate(0 38.25)"><path d="M8.071,55.4V49.347h4.035V55.4h5.044V47.33h3.027L10.089,38.25,0,47.33H3.027V55.4Z" transform="translate(0 -38.25)"/>
                    </g></g>
                    </svg>
                    <p>Ir para o portal Banzai</p>
                </div>
                <div className="flex-item-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="11.936" 
                        height="17.326" 
                        viewBox="0 0 11.936 17.326">
                        <g className="a" transform="translate(-66.905)">
                            <path d="M78.559,4.312a5.4,5.4,0,0,0-.28-.693A5.936,5.936,0,0,0,66.9,5.375v.739c0,.031.011.308.026.447.216,1.725,1.577,3.558,2.593,5.282,1.093,1.848,2.228,3.666,3.352,5.483.693-1.186,1.384-2.387,2.061-3.542.185-.339.4-.678.584-1,.123-.215.359-.431.466-.631,1.093-2,2.853-4.019,2.853-6.006V5.329A6.148,6.148,0,0,0,78.559,4.312ZM72.84,8.024a2.118,2.118,0,0,1-2.028-1.448,2.008,2.008,0,0,1-.057-.539V5.559a2.006,2.006,0,0,1,2.151-1.971,2.181,2.181,0,0,1,2.185,2.218A2.237,2.237,0,0,1,72.84,8.024Z"/></g>
                    </svg>
                    <p>Encontre uma concessionária</p>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="12.58" 
                                viewBox="0 0 16 12.58"><g className="a" transform="translate(0 -4.179)"><g transform="translate(0 4.179)"><path className="b" d="M1.99,4.922,7.753,10.05a1.354,1.354,0,0,0,.971.316A1.351,1.351,0,0,0,9.7,10.05l5.763-5.127c.462-.408.357-.743-.229-.743H2.22C1.634,4.179,1.529,4.514,1.99,4.922Z" transform="translate(-0.725 -4.179)"/><path class="b" d="M15.15,7.318l-6.3,5.371a1.391,1.391,0,0,1-1.7,0L.85,7.318C.383,6.92,0,7.133,0,7.792V16.6a1.142,1.142,0,0,0,1.067,1.2H14.933A1.142,1.142,0,0,0,16,16.6V7.792C16,7.133,15.617,6.92,15.15,7.318Z" transform="translate(0 -5.222)"/></g></g></svg>
                    <p>Fale conosco</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar;