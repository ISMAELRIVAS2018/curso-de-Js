// 102. Modificar Textos o Imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado.innerText); //si en el css - hidden; no lo va a encontrar
console.log(encabezado.textContent) // si lo va a encontrar
console.log(encabezado.innerHTML) // se trae el HTML

const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'