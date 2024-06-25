/* // Funciones
function uno (dos) {
    console.log("uno");
    setTimeout(dos,2000);
}

function dos () {
    console.log("dos")
}

// Funcion asincrona
setTimeout(() => uno(dos),5000)


// funcion anonima
const nombre = function () {
    console.log("nombre")
}
nombre();

// funcion flecha
const persona = () => console.log("Karina");
persona();
 */