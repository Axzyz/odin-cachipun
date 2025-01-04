let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const numberChoice = Math.floor(Math.random() * 3) + 1;
    
    let computerChoice = ""
    // TODO: Mejorar la solucion con un arreglo cuando se llegue a esa seccion
    switch (numberChoice) {
        case 1:
            computerChoice = "piedra"; 
            break;
        case 2: 
            computerChoice = "papel";
            break;
        case 3:
            computerChoice = "tijera"
            break;
        default:
            computerChoice = "";
            break;
    }
    
    return computerChoice;
}

const getHumanChoice = () => {
    let humanChoice;
    do {
        humanChoice = prompt("¿Piedra, Papel o Tijera?");
    } while (humanChoice.toLowerCase() != "piedra" && humanChoice.toLowerCase() != "papel" && humanChoice.toLowerCase() != "tijera")

    return humanChoice.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => {
    let resultadoJuego = "";
    
    switch (humanChoice) {
        case "piedra":
            if (computerChoice == "tijera") {
                console.log()
                resultadoJuego = `¡Has ganado! ${humanChoice} le gana a ${computerChoice}`;
                humanScore += 1;
            } else if (computerChoice == "papel") {
                resultadoJuego = `¡Has perdido! ${computerChoice} le gana a ${humanChoice}!`;
                computerScore += 1;
            } else {
                resultadoJuego = `¡Has empatado! ${humanChoice} empata con ${computerChoice}!`;
            }
            break;
        case "papel":
            if (computerChoice == "piedra") {
                resultadoJuego = `¡Has ganado! ${humanChoice} le gana a ${computerChoice}`;
                humanScore += 1;
            } else if (computerChoice == "tijera") {
                resultadoJuego = `¡Has perdido! ${computerChoice} le gana a ${humanChoice}!`;
                computerScore += 1;
            } else {
                resultadoJuego = `¡Has empatado! ${humanChoice} empata con ${computerChoice}!`;
            }
            break;
        case "tijera":
            if (computerChoice == "papel") {
                resultadoJuego = `¡Has ganado! ${humanChoice} le gana a ${computerChoice}`;
                humanScore += 1;
            } else if (computerChoice == "piedra") {
                resultadoJuego = `¡Has perdido! ${computerChoice} le gana a ${humanChoice}!`;
                computerScore += 1;
            } else {
                resultadoJuego = `¡Has empatado! ${humanChoice} empata con ${computerChoice}!`
            }
            break;
        default:
            break;
    }

    console.log(resultadoJuego, humanScore, computerScore);
}

playRound(getHumanChoice(), getComputerChoice());