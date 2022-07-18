// 85. .forEach y .map
 const pedientes = ['Tarea', 'Comer', 'Estudiar JavaScript'];

 pedientes.forEach( (pedientes,indice) =>{
    console.log(`${indice} : ${pedientes}`)
 })

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);