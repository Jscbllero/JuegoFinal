//Variables globales
//guardar imaganes
const d = document;
let imgN1 = [
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"},
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"}
];
let imgN2 = [
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"},
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"}
];
let imgN3 = [
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"},
    {nombre: "dp", url: "Imagenes/dp.png"},
    {nombre: "Bp", url: "Imagenes/Bp.png"},
    {nombre: "logo1", url: "Imagenes/logo1.png"},
    {nombre: "spider", url: "Imagenes/spider.png"},
    {nombre: "wolwe", url: "Imagenes/wolwe.png"},
    {nombre: "Marvel", url: "Imagenes/Marvel.png"}
];
let tablero = d.querySelector(".tablero");
let imagenNombre = [];
let imagenID = [];
let aciertos = 0;
let totalIntentos =0;
let totalTiempo = 0;
let tiempoSobrante =0; 
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempotranscurrido;
let btn_iniciar = d.querySelector(".btn-inicar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar =  new Audio("./Sonidos/Clapping-sound-268187.mp3");
let sonidoAdivinar =  new Audio("./Sonidos/gameboy-advance-turnon-sound-87714.mp3");
let sonidoFallar =  new Audio("./Sonidos/wet-fart-2-42358.mp3");
let sonidoPerder =  new Audio("./Sonidos/music-for-video-games-147550.mp3");
let sonidoGanar =  new Audio("./Sonidos/reverb-ui-button-1-231246.mp3");
let mostrarJugador = d.querySelector(".jugador");

//setTimeout()//ejecuta una vez en determinado tiempo
//setInterval()//ejecuta una vez en indefinido tiempo


//agaregar evento al boton inicio
btn_iniciar.addEventListener("click", function(){
    //alert("Juego inicado");

    //comprobar que el tiempo este activo
    if( estoyJugando == false && nivel == 1 ){
        VentanaModal();
        //estoyJugando = true;
        //alert("Estoy jugando")
        nivel1();
    }else if(estoyJugando == false && nivel == 2){
        estoyJugando = true;
        nivel2()
    }else if(estoyJugando == false && nivel == 3){
        estoyJugando = true;
        nivel3();
    }
    
});

//clearInterval(tiempotranscurrido);


//funciones para agregar imagenes al tablero
function agregarImagenes(){
    //let imagenNivel;
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if(nivel == 3){
        imagenNivel = imgN3;
    }

    //colocar imaganes aleatoriamente
    imagenNivel.sort(()=>Math.random() -0.5);

    //recorrer con un forEach las imaganes
    imagenNivel.forEach((imagen, i)=>{
        let div = d.createElement("div");
        div.className = "col-3";
        let img = d.createElement("img");
        img.className = "img-fluid altura-img";
        img.id = i;
        img.src = "Imagenes/logo2.png";
        img.addEventListener("click", mostrarImg);
        div.appendChild(img);
        tablero.appendChild(div);
    });
}

//mostrar las imagenes ocultas

function mostrarImg() {
    sonidoSeleccionar.play();
    let imgID = this.getAttribute("id");
    //alert(" #de imagen: "+imgID);
    this.src = imagenNivel[imgID].url;
    //imagenNombre = imgN1[imgID].nombre;
    //alert(nomImg);
    imagenNombre.push( imagenNivel[imgID].nombre);
    imagenID.push(imgID);
    //console.log("nombres: "+imagenNombre);
    //console.log("posiciones: "+imagenID);
    
    if(imagenNombre.length == 2){
        setTimeout(compararImg, 300)
        
    }
}

//Funcion para comparar imaganes
function compararImg(){
    let imagenesTablero = d.querySelectorAll(".tablero > div > img");
    //console.log(imagenesTablero);
    if( imagenNombre[0] == imagenNombre[1] ){
        if( imagenID[0] != imagenID[1]){
        //alert("Acertaste el par");
        sonidoAdivinar.play();
        imagenesTablero[imagenID[0]].src = "Imagenes/fenomenoide.png";
        imagenesTablero[imagenID[1]].src = "Imagenes/fenomenoide.png";
        imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImg);
        imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImg);
        aciertos++;
        mostrarAciertos.textContent = aciertos;
        }else{
            alert("Debes escoger otra imagen");
            imagenesTablero[imagenID[0]].src = "Imagenes/logo2.png";
            intentos++;
            mostrarIntentos.textContent = intentos;
        }

    }else {
        //alert("Siguen intentando");
        sonidoFallar.play();
        imagenesTablero[imagenID[0]].src = "Imagenes/logo2.png";
        imagenesTablero[imagenID[1]].src = "Imagenes/logo2.png";
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    imagenNombre = [];
    imagenID = [];

    //comprobar si se adivina todo

    if(nivel == 1 && aciertos == 6){
        alert("Gran logro!!!!");
        //recargar pagina
        //location.reload();
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        obtenerDatos();
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempotranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
        

    }else if( nivel == 2 && aciertos == 6 ){
    alert("Felicitaciones");
    sonidoGanar.play();
    nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempotranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
    }else if( nivel == 3 && aciertos == 6){
        alert("Felicitaciones cumpliste en totalidad");
        sonidoGanar.play();
        location.reload();
    }

}

function nivel1() {
    //agregar las imagenes al tablero
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    TiempoDeJuego();
}

function nivel2() {
    //agregar las imagenes al tablero
    agregarImagenes();
    TiempoDeJuego();
}

function nivel3() {
    //agregar las imagenes al tablero
    agregarImagenes();
    TiempoDeJuego();
}

function TiempoDeJuego(){
    //controlar el tiempo
    tiempotranscurrido = setInterval( ()=>{
        tiempo++;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
            alert("Rapido!!!");
            mostrarTiempo.classList.add("tiempo-agotado");
         }else if(tiempo == 0){
            alert("Tiempo se agota");
            sonidoPerder.play();
            clearInterval(tiempotranscurrido);
            setTimeout(()=>{
                location.reload();
            },3000)
            
         }

    }, 1000);
}

function quitarImg(){
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();
    });
}

//mostrar ventana modal
function VentanaModal(){
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });
    });
    //mostrar ventana modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    //evento click al boton azul modal
    btnJugador.addEventListener("click",()=>{
        //mostrar nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana Modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
        //iniciar n1
        estoyJugando = true;
        nivel1();
    });
}

