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