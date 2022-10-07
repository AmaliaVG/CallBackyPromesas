//Callback - programación asincrona - leer archivos , revisar la base de datos, hace esperar al usuario hasta que se revise la base de  datos

const paises = ['fancia', 'alemania', 'argentina', 'españa', 'holanda', 'portugal']

//La siguiente funcion espera el parametro país  de la otra funcion y el callback
function nuevoPais(pais, Callback) {
    setTimeout(() => {
        paises.push(pais)
        Callback();
    }, 2000)
}



function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}
//mostrarPaises();
//nuevoPais('alemania', mostrarPaises)

function iniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Colombia', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Bolivia', mostrarPaises)
            }, 3000)
        }, 3000)
    }, 3000)
}

iniciarCallBackHell()