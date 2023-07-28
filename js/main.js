// JSnack1
let max= prompt("inserisci il massimo:");
let min= prompt("inserisci il minimo:");
let appo;
if(min>max){
    appo=max;
    max=min;
    min=appo
}
let numeroRandom=Math.floor(Math.random()*(max-min))+min;
alert(numeroRandom);
// JSnack2
const stringa1=prompt('inserisci la prima stringa')
const stringa2=prompt('inserisci la seconda stringa')
if(stringa1.length==stringa2.length){
    alert(stringa1+" "+stringa2)
}
else if(stringa1.length>stringa2.length){
    alert(stringa1)
}
else{
    alert(stringa2)
}

// JSnack3
let arrayInfi=[];
let somma=0;
let media;
do {
    arrayInfi.push(prompt("inserisci un mumero"));
    somma=somma+arrayInfi[i];
}
while(somma<49)
media=somma / arrayInfi.length;
alert(somma);
alert(media);
// JSnack4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 == 0) {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);
    // dovrebbe restituire [1,3,5]
