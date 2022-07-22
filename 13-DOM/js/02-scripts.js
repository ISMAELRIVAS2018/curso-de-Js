// 98. getElementsByClassName

// seleccionar elementos por su clases...

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen mas de 1 vez 
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores);

// si una clase no exite
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste)