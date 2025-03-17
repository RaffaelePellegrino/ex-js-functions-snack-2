// function somma
//1
function somma(n1,n2) {
    return n1+n2
}

console.log("hello world")

console.log(somma(2,2))

//2 

const sommatore = (n1,n2) => {
    return  n1 + n2
}

console.log(sommatore(3,3))

// snack 2 

function quadrato (n) {
    return n*n
}

console.log(quadrato(5))

// snack 3 
const moltiplicazione = (n1,n2) => n1 * n2

function eseguiOperazione (n1, n2, operatore){
    return operatore(n1,n2)
}

console.log(eseguiOperazione(5,7,moltiplicazione))

//snack 4 
function creaTimer(tempo) {
    setTimeout(()=>console.log("ciao"),tempo)
}

creaTimer(1000)

//snack 5

function stampaOgniSecondo(messaggio,interval, secondiAttivi) {
    const stampa = setInterval(() => {
        console.log(`${messaggio}`)
    }, interval);

    setTimeout(() => {
        clearInterval(stampa)
        console.log("interrompo")
    }, secondiAttivi)
}
stampaOgniSecondo("meow",1000,10000)


//snack 6 


function creaContatoreAutomatico(intervallo, secondiAttivi){
    let contatore = 0
    const stampa = setInterval(() => {
        contatore = contatore + 1
        console.log(contatore)
        
    }, intervallo)
    
    setTimeout(() => {
        clearInterval(stampa)
        console.log("interrompo contatore")
    }, secondiAttivi);

}

creaContatoreAutomatico(1000, 10000)

//snack 7 

function eseguiEferma(messaggio, avvio, stop){
    let stampa
    setTimeout(() =>{
        stampa = setInterval (() => {
        console.log(`${messaggio}`)
        }, 1000)
    },avvio)
    
    setTimeout(() => {
        clearInterval(stampa)
        console.log("interrompo la stampa")
    }, stop + avvio);
}

eseguiEferma("ciao", 10000, 30000)

//snack 8 ( bonus )

function contoAllaRovescia (countdown) {
    let intervallo;
    if (countdown > 0) {
        
        intervallo=setInterval(() => {
            console.log(countdown)
            countdown = countdown - 1
            contoAllaRovescia(countdown)
            clearInterval(intervallo)
        }, 1000)
    }else{
        clearInterval(intervallo)
        console.log("tempo scaduto")
    }
}
contoAllaRovescia(5)

// snack 9 (bonus) 

function sequenzaOperazioni(operazioni, intervallo){

    operazioni.forEach((operazione,index) => {
        setTimeout(() => {
            operazione()
        }, intervallo * index);
    });
}
sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 1000)