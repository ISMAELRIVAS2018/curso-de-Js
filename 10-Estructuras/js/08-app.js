const autenticado = true;

if(autenticado) {
    console.log('El usuario esta utenticado')
}
const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 400) {
        console.log('Exelente!!');
        return
    }   

    if (puntaje > 300){
        console.log('Buen puntaje... felicidades')
    }
}

revisarPuntaje();