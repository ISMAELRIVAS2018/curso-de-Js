// 59. La Diferencia entre Function expression y Declaration

// Declaracion de funcion (Function Declaratiom)
// codigo se mostrara
sumar();
function sumar () {
    console.log (2 + 2);
}


// Expresion de funcion (Function Expression)
// codigo no dara erro 
const sumar2 = function() {
    console.log(3 +3);
}

sumar2();