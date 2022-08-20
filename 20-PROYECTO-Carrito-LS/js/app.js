const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.getElementById('lista-cursos');
let articulosCarrito = []

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregando al carrito"
    listaCursos.addEventListener('click', agregarCurso); 
    
    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos del carrito
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

//   vaciar el carrito
vaciarCarritoBtn.addEventListener('click', () => {

    articulosCarrito = []; //reseteamos el arreglo

    limpiarHTML();
})
    
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCursos(cursoSeleccionado);
    
    }
}

// Eliminar un curso del carrito
function eliminarCurso(e){
   if(e.target.classList.contains('borrar-curso')){
    const cursoId = e.target.getAttribute('data-id');

    // Eliminar del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
    
    carritoHTML(); //Inerar sobre el carrito y mostrar su html
   }
}


// Lee el contenido del HTML al que le dimos click  y extrae la informacion del curso
function leerDatosCursos(curso){

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    // Revisa si un elemento ya existe en el carrito
    const existe =articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++; //retorna el objeto actualizado
                return curso;
            }else{
                return curso; //retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos]
    }else{
        //Agregar elementos al arreglos de carrito
        articulosCarrito = [...articulosCarrito,infoCurso]
       

    }

    // Agregar elemento al arreglo de carrito
// articulosCarrito = [...articulosCarrito, infoCurso];

console.log(articulosCarrito);

carritoHTML();
}


// Muestrame el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
             <img src="${imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}" >x</a>
        
        `;


        // Agregar el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras
   function sincronisarStrorage(){
        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

    }
    
}

// Eliminar los cursos del tbody
function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
