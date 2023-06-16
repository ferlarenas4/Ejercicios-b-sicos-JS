let frase = prompt ("Ingresa una frase:");
let letra = "a" ;
let contador = 0;

for (let i = 0 ; i < frase.length; i++) {
    if (frase.charAt (i).toLowerCase() === letra) {
    contador++; 
    }
}
console.log ("La frase tiene "+ contador +  " letras a")
