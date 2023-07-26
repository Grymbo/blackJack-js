/**
 * 2C = two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = []; // Un arreglo vacio para almacenar  las cartas dse la baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnDetener = document.querySelector('#btnDetener');

/**
 * el código crea una baraja de cartas de póker mediante dos bucles anidados que 
 * combinan los números del 2 al 10 con los palos (tipos) y luego combinan las cartas
 *  especiales con los palos. El resultado final es un arreglo que contiene todas las cartas 
 * de la baraja.
 */

// Funcion para construir la baraja.
function crearDeack() {
    for( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }

    /**
     * shuffle_.shuffle(list) source
    Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

    _.shuffle([1, 2, 3, 4, 5, 6]);
    => [4, 1, 6, 3, 5, 2]
     */
    deck = _.shuffle(deck);

    return deck;
}

crearDeack();

/**
 * 
 * La función pedirCarta() toma la última carta del arreglo deck, 
 * la elimina del deck y la devuelve. Si el deck está vacío al intentar pedir una carta, 
 * se lanzará una excepción con el mensaje "No hay mas cartas en el deck". Para usar esta función, 
 * simplemente debes llamarla como en el último renglón del código: pedirCarta();. 
 * Recuerda que cada vez que llames a esta función, se tomará una carta del deck y se eliminará de él.
 */
const pedirCarta = () => {
    // Verifica si el deck esta vacio, si no lo esta continuara con el proceso de pedri cartas.
    if(deck.length === 0) {
        throw 'No hay mas cartas en el deck';
    }

    const pedirCartas = deck.pop();

    return pedirCartas;
}

// comvierte el valor de las cartas en numeros reales a su correpondiente
// 1,2,3....10 y A = 11 y J,Q,K=10
const valorCarta = (pedirCartas) => {
    let puntos = isNaN(pedirCartas[0]) ? (pedirCartas[0] === 'A' ? 11 : 10) : parseInt(pedirCartas);
    return puntos;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(); 

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21) {
        console.warn('jajajaj loser');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador === 21) {
        console.warn('Ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta(); 

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }
    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
}
