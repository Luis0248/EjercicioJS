/**
 * 5. Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el
promedio
 */
'use script'
let nota1 = parseFloat(prompt("ingrese la primera nota"));
let nota2 = parseFloat(prompt("ingrese la segunda nota"));
let nota3 = parseFloat(prompt("ingrese la tercera nota"));

let promedio = nota1+nota2+nota3/3;
alert(" la primera nota es: ", nota1);
alert(" la segunda nota es: ", nota2);
alert(" la tercera nota es: ", nota3);
alert(" el promedio es: ", promedio);

if(promedio>3.0){
    
}