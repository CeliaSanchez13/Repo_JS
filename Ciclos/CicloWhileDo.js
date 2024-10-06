// Ciclo WHILE
// Imprimir los valores del 0 al 5
let contador = 0, repeticiones = 5;
while(contador <= repeticiones){
    console.log(contador++);
    //contador++;
}

// Ciclo DO WHILE
let contador = 0, repeticiones = 5;
do{
    console.log(contador++);
    //contador++;
}while(contador <= repeticiones)


//ACUMULADOR SUMA PERO CON WHILE Y DO WHILE
let i = 1, numList=5, acum=0;
while(i<= numList){
    console.log(`${acum} + ${i}`)
    acum += i
    console.log(acum)
    i++;
}

//DO WHILE
let i = 1, numList=5, acum=0;
do{
    console.log(`${acum} + ${i}`)
    acum += i;
    console.log(acum)
    i++;
}while(i<=numList)
