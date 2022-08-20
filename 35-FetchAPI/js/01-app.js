const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const url = 'data/datos.txt';

    fetch(url)
    .then( repuesta => {
        
        console.log(repuesta);
        console.log(repuesta.status);
        console.log(repuesta.statusText);
        console.log(repuesta.url);
        console.log(repuesta.type);

        return repuesta.text()
    })
    .then(datos => {
        console.log(datos);
    })
    .catch( error => {
        console.log(error);
    })

}