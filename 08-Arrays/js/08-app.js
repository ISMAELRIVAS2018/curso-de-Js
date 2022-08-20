// 55. Destructuring de Arrays

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre
// console.log(nombre);

// destructuring
const{ disponible } = producto;
console.log(disponible);

// destructuring con arreglos
const numero = [10,20,30,40,50,];

const [primero, ...tercero] = numero;
console.log(tercero);