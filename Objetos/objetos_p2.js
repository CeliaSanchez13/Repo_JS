let persona = {
    nombre: 'Celia',
    apellido: 'SM',
    email: 'celia@gmail.com',
    edad: 28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto); //NO HACE FALTA PONERLE () PORQUE JS DETECTA CON EL GET QUE VAMOS A RECUPERAR INFO DE NUESTRA PROPIEDAD

console.log(persona.lang);

persona.lang = 'en'; //METODO SET, NO HACE FALTA PASARSELO CON () YA QUE CON EL = HACE LA ASIGNACION DIRECTAMENTE, SI HAY MAS PARAMETROS SE HARIA CON () ? 
console.log(persona.idioma) //APARECERA EN tras la asignacion del SET y luego la llamada del GET.




