// 114. Prevenir Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
});
