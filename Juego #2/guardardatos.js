//variables globales

let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";

//funcion para obtener datos

function obtenerDatos() {
    //crear objetos para los datos
    let datosJugador = {
        "nombre" : nombreJugador.textContent,
        "intentos" : totalIntentos,
        "tiempototal" : totalTiempo,
        "tiemposobrante" : tiempoSobrante,
    }
    //mostrar datos en consola
    console.log(datosJugador);
    //pasar los datos del jugador
    guardarDatos(datosJugador);
}

//funciones para guardar los datos en localstorage
function guardarDatos(datos) {
    //array para los datos antiguos y nuevos
    let jugadores = [];
    //tomar datos de localstorage previamente
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if ( datosPrevios != null ){
        jugadores = datosPrevios;
    }
    jugadores.push(datos);
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));

}

function mostrarDatos() {
    //array para los datos antiguos y nuevos
    let jugadores = [];
    //tomar datos de localstorage previamente
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if ( datosPrevios != null ){
        jugadores = datosPrevios;
    }
    //organizar jugadores
    jugadores.sort((a,b)=>{
        if( a.tiempototal < b.tiempototal ){
            return -1;
        }
        if(a.intentos < b.intentos){
            return 1;
        }
    });


    //mostrar datos de tabla
    jugadores.forEach((jugador, i) => {
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td> ${i+1} </td>
            <td> ${jugador.nombre} </td>
            <td> ${jugador.tiempototal} </td>
            <td> ${jugador.intentos} </td>
            <td> ${jugador.tiempoSobrante} </td>
    `;
    tabla.appendChild(fila);

    })

}