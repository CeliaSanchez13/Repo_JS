let persona = {
    nombre: 'Celia',
    apellido: 'SM',
    email: 'celia@gmail.com',
    edad: 28,
    nombreCompleto:function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.email)
console.log(persona.edad)
console.log(persona.nombreCompleto())
console.log(persona)

//------------------------------------------------

//Agregar a un objeto en memoria propiedades
let persona2 = new Object(); //Vacio
persona2.nombre = 'Carlos';
persona2.direccion = 'Madrid';
persona2.tlf = '673426455';

console.log(persona2.tlf)

//--------------------------------------------------
//Formas de acceder a las propiedades de un objeto

console.log(persona['apellido'])

//Recorres las propiedades de nuestro objeto
for( nombrePropiedad in persona){
    console.log(nombrePropiedad) //Nombres de las propiedadades de nuestro objeto
    console.log(persona[nombrePropiedad]) //Accedemos directamente a el valor de la propiedad
}

//-------------------------------------------------
//Agregar o borrar propiedades de nuestro objeto
persona.tlf = '654374533';

console.log(persona)

delete persona.tlf; //Borrar una propiedad

console.log(persona)

//--------------------------------------------------
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);

//for in
for( nombrePropiedad in persona ){
    console.log( persona[nombrePropiedad]);
}

//Object VALUES!
//Nos regresa un arreglo con los valores de cada uno de las propiedades de nuestro objeto
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona); //Se imprimirá el objeto con sus propiedades y sus valores correspondientes, SE COMVIERTE EN CADENA

//METODOS GET Y SET
//Acceder y modificar valores de las propiedades de nuestro objeto
