//Aplicar PROMISE CON FUNCIONES

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agrgado ${pais} `)
    }, 3000)
})

nuevoPais(`Alemania`)
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('fancia')
    })

.then(resultado => {
    console.log(resultado)
    console.log(paises)
    return nuevoPais('Inglaterra')
})

.then(resultado => {
    console.log(resultado)
    console.log(paises)
})