// 106. Generar HTML con JavaScript
const enlace = document.createElement('A');

// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Alladiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target ="_blank"

enlace.setAttribute('data-enlace', 'nuevo-enlace')

enlace.classList.add('alguna-clase')

enlace.onclick = miFuncion;

// Selectionar la navegacion
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children); //me ayuda a localisar cuantos elementos hay 
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert('Diste click')
}

// Crear un CARD

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'conciento';
parrafo1.classList.add('categoria', 'cocierto');

const parrafo2 = document.createElement('p');

const parrafo3 = document.createElement('p');



