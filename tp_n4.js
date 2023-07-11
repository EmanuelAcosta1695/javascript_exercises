// Utilizar funciones flechas. 
/*
Para la resolución de los ejercicios tener en cuenta si los parámetros 
que reciben las funciones son los correctos. Por ejemplo, si la función 
recibe un texto, debemos asegurarnos de que el parámetro recibido sea 
un string y no un número, array, boolean, etc.
*/


// Ejercicio 1
/*
Programa una función para contar el número de veces que se 
repite una palabra en un texto largo. Por ejemplo, 
miFuncion("hola mundo chau mundo", "mundo") devolverá 2.
*/

const countWord = (phrase, word) => {

    if (typeof phrase !== 'string' || typeof word !== 'string') {
        
        throw new Error('Los parámetros deben ser de tipo string');
      
    } else {
        const words = phrase.split(" ");

        let counter = 0;
    
        for (let i = 0; i < words.length; i++) {
            if (words[i] === word) {
                counter++;
            }
          }
    
        console.log('la palabra', word, 'aparece', counter, 'en la frase:', phrase)
    }
    
};

// countWord("La casa es muy bonita y la casa tiene un jardín", "casa")


// Ejercicio 2
/*
Programa una función que elimine cierto patrón de caracteres de un texto dado. 
Por ejemplo, miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5”.
*/

const removeCharacters = (text, characters) => {
    if (typeof text !== 'string' || typeof characters !== 'string') {
        
        throw new Error('Los parámetros deben ser de tipo string');
      
    } else {
        const regex = new RegExp(characters, "g"); // => global. Se busca el patrón en todo el texto
        const result = text.replace(regex, "");
        console.log(result);
    }
}

//removeCharacters("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


//Ejercicio 3
/*
Programa una función para convertir números de base binaria a decimal 
y viceversa. Por ejemplo, miFuncion(100, 2) devolverá 4 en base 10.
*/


const converter = (binario, decimal) => {
    if (typeof binario !== 'number' || typeof decimal !== 'number') {
        
        throw new Error('Los parámetros deben ser de tipo number');
      
    } else {
        let numDecimal = parseInt(binario, decimal);
        
        //const numBinario = decimal.toString(binario);

        let numBinario = (decimal % 2).toString();
        for (; decimal > 1; ) {
            decimal = parseInt(decimal / 2);
            numBinario  =  (decimal % 2) + (numBinario);
        }

        console.log('binario a decimal: ', numDecimal)
        console.log('decimal a binario: ', numBinario)
    }
}

//converter(100, 2)


// Ejercicio 4
/*
Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy. Por ejemplo, miFuncion(new Date(1987,10,5)) devolverá 35 años.
*/

const howLong = (date) => {

        today = new Date()

        console.log(date.getFullYear())
        console.log(today.getFullYear())
        console.log(today.getFullYear() - date.getFullYear())
        
}

// howLong(new Date(1987,10,5))



// Ejercicio 5
/*
Programa una función que dada una cadena de texto cuente el número de vocales y consonantes. 
Por ejemplo, miFuncion("Hola Mundo") devolverá vocales: 4, consonantes: 5. Utilizar expresiones regulares.
*/

const countVowelsConsonants = (text) => {
    if (typeof text !== 'string') {
        
        throw new Error('El parámetro debe ser de tipo string');
      
    } else {

        var numeroVocales = text.match(/[aeiou]/g).length;
        

        var numeroConsonantes = text.length - numeroVocales

        console.log('vocales:', numeroVocales, 'consonantes:', numeroConsonantes)
    }
}

// countVowelsConsonants("hola")



// Ejercicio 6
/*
Programa una función que dado un arreglo de elementos, elimine los duplicados. 
Por ejemplo, miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const array = (text) => {
    if (text.constructor !== Array) {
        throw new Error('El parámetro debe ser de tipo Array');
    } else {
        let uniqueElements = [...new Set(text)];
        console.log(uniqueElements)
    }
}

// array(["x", 10, "x", 2, "10", 10, true, true])


// Ejercicio 7
/*
Programa una función que dado un arreglo de números obtenga el promedio. 
Por ejemplo, promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. No utilizar 
estructuras repetitivas. Consultar en la documentación algún método de 
los arreglos que permitan solucionar el ejercicio.
*/

const average = (arrayNumbers) => {
    if (arrayNumbers.constructor !== Array) {
        throw new Error('El parámetro debe ser de tipo Array');
    } else {
        let numbers = 0

        arrayNumbers.forEach(element => {
            numbers += element
        });

        console.log(numbers/arrayNumbers.length)
    }
}

// average([9,8,7,6,5,4,3,2,1,0])


//Ejercicio 8

/*
Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película, 
titulo, director, año de estreno, país o países de origen, géneros y calificación.
• Todos los datos del objeto son obligatorios.
• Valida que el id tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
• Valida que el título no supere los 100 caracteres.
• Valida que el director no supere los 50 caracteres.
• Valida que el año de estreno sea un número entero de 4 dígitos.
• Valida que el país o países sean introducidos en forma de arreglo.
• Valida que los géneros sean introducidos en forma de arreglo.
• Valida que los géneros introducidos estén dentro de los géneros aceptados (Action, Animation, 
    Comedy, Drama, Horror, Musical, Thriller).
• Crea un método estático que devuelva los géneros aceptados.
• Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
• Crea un método que devuelva toda la ficha técnica de la película.
• A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase de 
    forma automatizada e imprime la ficha técnica de cada película.
*/