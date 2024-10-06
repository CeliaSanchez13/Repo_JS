//Ciclo for

let repeticiones = 5;
for (let contador = 0 ;  contador <= repeticiones; contador++){
    console.log(contador)
}

//Ejemplo de incremento y decremento
let numMax = 10, numMin=-10;

for(let i = 1; i <= numMax; i += 3){ //incremento pero de 3 en 3
    console.log(i )
}

for(let i = 1 ; i >= numMin; i -= 3){
    console.log(i)
}

//EJERCICIO DE SUMAR LOS 5 PRIMEROS NUMEROS CON UN BUCLE FOR
let listNum = 5, acum = 0;

for( let i = 1 ; i <= listNum ; i++){
    console.log(`${acum} + ${i}`)
    acum += i
    console.log(acum)
}
