// 109. Eventos con el Mouse

const nav = document.querySelector('.navegacion');

// registro un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgrouncolor = 'trasparente';
})

nav.addEventListener('mouseup', () => {
    console.log('Entrada en la navegacio');
    nav.style.backgrouncolor = 'white';
})

// mousedow / similar al click
// click
// dblclick / doble click
// mouseup / cuando suelta el mouse