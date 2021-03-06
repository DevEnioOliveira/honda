import React from 'react'

import './Form.css'

const Form = (props) => {
    return (
        <div className="form-flex-container">
            <div className="icon-form">
            <svg xmlns="http://www.w3.org/2000/svg" 
                    width="38.997" 
                    height="38.979" 
                    viewBox="0 0 38.997 38.979"><g transform="translate(0.01)"><path className="a-form" d="M35.258,31.519a17.212,17.212,0,0,0-3.051-4.067A14.349,14.349,0,0,0,28.14,24.4a.745.745,0,0,0-.847.169l-2.2,2.2a1.828,1.828,0,0,1-1.525.508c-2.2,0-5.423-2.034-8.474-4.915-3.559-3.559-6.271-8.135-4.406-10l2.2-2.2c.169-.169.339-.678.169-.847a14.349,14.349,0,0,0-3.051-4.067A17.212,17.212,0,0,0,5.939,2.2a1.27,1.27,0,0,0-.847.169L.346,7.115C-.5,7.962.177,10.5,2.21,13.724a69.178,69.178,0,0,0,9.66,11.863c7.8,7.8,14.575,11.863,17.456,11.863a1.433,1.433,0,0,0,1.017-.339l4.745-4.745A.745.745,0,0,0,35.258,31.519Z" transform="translate(0 1.528)"/><path class="a" d="M25.363,4.237A15.016,15.016,0,0,0,14.856,0h0A1.337,1.337,0,0,0,13.5,1.356a1.247,1.247,0,0,0,1.356,1.356h0A12.044,12.044,0,0,1,23.5,6.271a11.767,11.767,0,0,1,3.559,8.643,1.337,1.337,0,0,0,1.356,1.356c.847,0,1.186-.847,1.186-1.525A15.016,15.016,0,0,0,25.363,4.237Z" transform="translate(9.386)"/><path class="a" d="M14.025,5.612h0a8.6,8.6,0,0,1,6.1,2.542,8.7,8.7,0,0,1,2.542,6.271,1.337,1.337,0,0,0,1.356,1.356c.847,0,1.186-.678,1.186-1.525a10.753,10.753,0,0,0-3.389-7.965A11.03,11.03,0,0,0,13.856,2.9h0A1.337,1.337,0,0,0,12.5,4.256,1.384,1.384,0,0,0,14.025,5.612Z" transform="translate(8.692 2.015)"/><path class="a" d="M12.886,8.442h0a5.221,5.221,0,0,1,5.423,5.423,1.337,1.337,0,0,0,1.356,1.356,1.247,1.247,0,0,0,1.356-1.356,7.684,7.684,0,0,0-2.373-5.593A7.975,7.975,0,0,0,13.056,5.9h0A1.337,1.337,0,0,0,11.7,7.256,1.071,1.071,0,0,0,12.886,8.442Z" transform="translate(8.136 4.099)"/></g></svg>
            </div>
            <div className="form-description">
                <p className="form-description-1">Solicitar um</p>
                <p className="form-description-2">CONTATO</p>
            </div>
            <div className="inputs-container">
                <input type="text" placeholder="Nome" name="nome"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="text" placeholder="Telefone" name="telefone"/>
                <select name="horario" id="horario" placeholder="Escolha o hor??rio">
                    <option value="choose" >Escolha o hor??rio</option>
                    <option value="choose">15:00</option>
                    <option value="choose" >18:00</option>
                </select>
                <select name="local" id="local" placeholder="Escolha a unidade">
                    <option value="local1" >Escolha a unidade</option>
                    <option value="local2" >Rua exemplo 1 n?? 32</option>
                    <option value="local3" >Rua exemplo 2 n?? 50</option>
                </select>
                <div className="button-form">AGENDAR TEST DRIVE</div>
            </div>
        </div>
    )
}

export default Form;