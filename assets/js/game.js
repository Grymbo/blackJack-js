/**
 * 2C = two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = []; // Un arreglo vacio para almacenar  las cartas dse la baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck);

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

pedirCarta();


