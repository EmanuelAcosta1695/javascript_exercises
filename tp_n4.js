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

