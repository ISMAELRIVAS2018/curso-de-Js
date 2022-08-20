// 76. El Operador && para revisar que se cumplan 2 o más condiciones

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('si puedes comprar')
}else if(!puedePagar && usuario) {
    console.log('No no pudes pagar');
}else if(!usuario){
    console.log('Iniciar sesicion o saca una cuenta')
}else if(!puedePagar) {
    console.log('Fondo Insuficientes')
}
