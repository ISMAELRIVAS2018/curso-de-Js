// 104. Traversing the DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes) //Los espacios en blanco son considerados elementos
console.log(navegacion.children)  //Los espacios en blanco son considerados elementos
             
                //    .firstElementChild     // trae el primer elemento selecionado 
                //     .lasElementChild      // trae el ultimo elemento 
// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'

// // console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

//traversing hte hijp al padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElemensibling)
console.log(card.nextElemensibling.nextElemensibling);

const ultimoCard = document.querySelector('.card:(4)')
console.log(ultimoCard.previouseElementSibling)