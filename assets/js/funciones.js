// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

/*function pocima(ing1, ing2) {
    return pocima;
}

// pocima(pelo, uñas);

function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(`El lanzamiento fue ${moneda}`);
    return moneda;
}

function ganar(saldo, apuesta) {
    saldo = saldo +(apuesta * 2);
    return saldo;
}

function perder(saldo, apuesta) {
    saldo = saldo - apuesta;
    return saldo;
}

let saldo = 100;
let apuesta = 20;

lanzarmoneda();
ganar(saldo, apuesta);
perder(saldo, apuesta);

// EXPRESIÓN

let gana = ganar();

// ANONIMA

let ganar = function ganar(saldo, apuesta) {
    saldo = saldo + (apuesta * 2);
    return saldo;
}

// FLECHA

const ganar = () => {
    saldo = saldo + (apuesta * 2);
    return saldo;
}*/
function balance(balance,cash){
    cash = cash + balance;
    return cash;
}
function throwCoin() {
    let coin = Math.floor((Math.random() * 2));
    console.log(`El lanzamiento fue ${coin}`);
    return coin;
}
function win(bet, cash){
    cash = cash + (bet * 2);
    return cash;
}
function lose(bet, cash){
    cash = cash - bet;
    return cash
}
function comparison(predict,coinThrow, bet,cash){
    if (predict == coinThrow){
        cash = win(bet, cash);
    }
    else{
        cash = lose(bet, cash);
    }
    return cash;
}
function game(cash){
    let nonPermit = true;
    let bet = 0;
    while (nonPermit){
        bet = parseInt(prompt("¿Cuánto desea apostar?"))
        if (bet > cash){
            console.log("No hay suficiente saldo.");
        }
        else{
            nonPermit = false;
        }
    }
    let predict = parseInt(prompt("¿Cara (0) o Sello (1)?"));
    coin = throwCoin();
    cash = comparison(predict, coin, bet, cash);
    return cash
}
let play = true;
let selection;
let cash = 0;

while (play){
    console.log("1) Recargar saldo");
    console.log("2) Jugar");
    console.log("3) Salir");

    selection = parseInt(prompt("Digite su opción: "));

    switch (selection){
        case 1:
            let newBalance = parseInt(prompt("¿Cuánto desea recargar?"));
            cash = balance(newBalance,cash);
            break;
        case 2:
            cash = game(cash);
            break;
        case 3:
            play = false;
            break;
        default:
            console.log("Opción inválida");
            break;

    }
}

