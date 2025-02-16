// declaramos las variables a utilizar
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo = 10;

// definimos la funcion para asignar texto a un elemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// definimos la funcion onclick para capturar el input del usuario
// caja input del usuario
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en solo ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el ususario no hacertp el número secreto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', '¡El número secreto es menor!');
        }else{
            asignarTextoElemento('p', '¡El número secreto es mayor!');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

// definimos la funcion de limpiar caja
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// definimos la funcion para generar un número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeromaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeromaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{

        // Si el numero generado esta incluido en la lista hacemos una operacion u otra
        if (listaNumerosSorteados.includes(numeroGenerado)){
            // utilizaremos recursividad para generar un nuevo número
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }   
    }   
}

// definimos la funcion con las condiciones iniciales del juego
function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeromaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
console.log(numeroSecreto);
}

// definimos la funcionalidad del boton de nuevo juego
function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de número
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego   
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();