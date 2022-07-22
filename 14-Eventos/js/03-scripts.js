// 110. Eventos sobre los Inputs

// onblur	Deseleccionar el elemento	<button>, <input>, <label>, <select>, <textarea>, <body></body>
// onchange	Deseleccionar un elemento que se ha modificado	<input>, <select>, <textarea></textarea>
// onfocus	Seleccionar un elemento	<button>, <input>, <label>, <select>, <textarea>, <body></body>
// onkeydown	Pulsar una tecla (sin soltar)	Elementos de formulario y <body>

const busqueda = document.querySelector('.]\busqueda');

busqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
        console.log('fallo la validacion')
    }
})