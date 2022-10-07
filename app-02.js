//Una promesa por default ya es un callback

//Resolve=promesa resuelta, Reject=promesa rechazada
const aplicarDesc = new Promise((resolve, reject) => {
    const descuento = true

    if (descuento) {
        resolve('descuento aplicado')
    } else
        reject('no se pudo aplicar el descuento')
})

//Método then es si se aplicó el descuento, entonces 
aplicarDesc
    .then(resultado => {
        console.log(resultado)
    }).catch(error => {
        console.log(error)
    })
console.log(aplicarDesc)

//Hay tres posibles valores en los promise
//Resuelto=resolve =true
//Rechazado=reject=falso
//pending=que aún no se ha cumplido pero tampoco ha sido ejecutado

//then= entonces=la acción que se realiza en el promise
//Siempre que el promise falte tenemos acceso al .catch

//Aplicar PROMISE CON FUNCIONES

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agrgado ${pais} `)
    }, 3000)
})

nuevoPais(`Alemania`).then(resultado => {
    console.log(resultado)
    console.log(paises)
})