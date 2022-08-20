// 111. Evento Submit a un formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    console.log('consultar un api')

    console.log(e.target.action);
}

