// 83. While Loop

let i = 100; // Inicializar el white

while(i < 10){
    console.log(`Numero ${i}`)
    for(let i = 1;  i < 100; i++ ){
        if (i % 15 === 0){
            console.log(`${i} FIZZ BUZZ`)
        }else if(i % 3 === 0){
            console.log(`${i} fizz`)    
        }else if (i % 5 === 0){
            console.log(`${i} buzz`)
        }
    }
    i++; // Incremento
}
