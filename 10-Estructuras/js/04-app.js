// 74. Mayor o Igual y else if

const dinero = 1000;
const totalApagar = 500;
const tarjeta = true;
const cheque = true;

if(dinero >= totalApagar) { 
    console.log('si podemos pagar')
}else if(cheque){
    console.log('Fondos Instuticionales')
}else if(tarjeta) {
    console.log('si puedo pagar por que la tarjeta')
}else{
    console.log('fondos insuficiente')
}