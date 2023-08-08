/**
 * 2. Leer un número e imprimir un mensaje si es positivo o negativo
 */
'use strict';
let numero = parseFloat(prompt('Introduzca el número'));
if (numero > 0){
    alert(`el numero: ${numero} es positivo }`);
    let suma = numero +2;
    alert("La suma es:" + suma);

}else{
    if (numero < 0)
      alert(`el numero: ${numero} es negativo }`);
     else alert(`el numero: ${numero} es cero)`)
    
}
let parImpar