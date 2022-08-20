// 54. Eliminar elementos con Splice

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto4 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}


// push agrega al final de un arreglo
carrito.push(producto2)
carrito.push(producto);
carrito.push(producto4);


carrito.unshift(producto3);
console.table(carrito);

// // Eliminar ulyimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// // Eliminar del inicio del  arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(3,1);
console.table(carrito);
