'use strict'
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Por favor, ingrese números válidos.");
} else {
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;
  let multiplicacion = numero1 * numero2;
  let divicion = numero1 / numero2;


  console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
  console.log("La resta de " + numero1 + " y " + numero2 + " es: " + resta);
  console.log("la multiplicacion de" + numero1 + "y" + numero2 + "es:" + multiplicacion);
  console.log("la divicion de" + numero1 + "y" + numero2 + "es:" + divicion);
}
  