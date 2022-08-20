const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheques':
        console.logo('pagastes con ${metodopago}');
        break    
    default:
        console.log('Aun no has selecionado un metodo de pago o metodo de pago no soportado');
        break;    
}

function pagar() {
    console.log('pagando...');
}