<<<<<<< HEAD
=======
// 37. Agregar o Eliminar Propiedades de un objeto

>>>>>>> 0ec0a4c817b57b9d4f15bf98c150dc0451ca4260
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// agregar nuevas propiedades addEventListener; Object
producto.imgen = "imagen.jpg"

// Eliminar propiedades de Object
delete producto.disponible;

console.log (producto)