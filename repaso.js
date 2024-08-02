console.log('repaso')

// Descompocisión
// Reconocimiento de patrones

// hacer un programa o software que calcule la edad de una persona , consola y la fecha de nacimiento es una varaible
// PSEUDOCODIGO
// impimir en consola la edad
// restar la fecha actual la fecha de nacimiento
// asignar a la variable edad el calculo de la funcion

// crear una funcion que retorne la edad
function calculateAge(birthDate){
    // obtener la fecha actual
    let today = new Date()
    
    return (today - birthDate) / ( 1000 * 60 * 60 * 24 * 365  )
    
}
// definir variable fecha de nacimiento
let birthDate = new Date('1991-09-02')

let age = calculateAge(birthDate)
console.log('edad:',age)
birthDate = new Date('1996-06-10')

age = calculateAge(birthDate)
console.log('edad:',age)
