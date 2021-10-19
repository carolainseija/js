// 7. Conversion

var pesos = parseInt(prompt("Ingrese su monto en U$"));

var dolares = pesos/43.91

alert("US$" + dolares);

// 8. Par impar

var num = parseInt(prompt("Ingrese numero"));
var ooe= num%2==0 ? alert("Este numero es par") : alert("Este numero es impar");

// 9. Mayor?    

var num1 = parseInt(prompt("Dime tu edad"));
var mayor = num1 > 18 ? alert("Podes votar") : alert("No puedes votar");

// 10. Inicia sesion

var username = prompt("Ingrese usuario");
var password= prompt("Ingrese contraseña");

var incorrect = password != "LeErraste" ? alert("Probá de nuevo") : alert("Le pegaste");

// 11. 
var num = parseInt(prompt("Numero 1 para saber su adición, producto, resultado, y resta"));
var num1 = parseInt(prompt("Numero 2 para saber su adición, producto, resultado, y resta"));

var ad = num + num1;
var mu = num * num1;
var re = num - num1;
var div = num / num1

alert("Resultado suma " + ad + "\n" +
    "Resultado multiplicacion " + mu + "\n" + 
    "Resultado resta " + re + "\n"+
    "Resultado división " + div    
);

// 12. 
var num = parseInt(prompt("Ingrese base"));
var num1 = parseInt(prompt("Ingrese altura"));
 
alert("Perimetros: " + "\n" + "Cuadrado y Rectángulo: " + (num*2 + num1*2));

var num = parseInt(prompt("Base: "));
var num1 = parseInt(prompt("Cateto 1: "));
var num2 = parseInt(prompt("Cateto 2: "));

var peri = num+ num1 + num2;
alert(peri);

var radio = parseFloat(prompt("Ingrese el radio de su circunferencia"));var perim = radio 
var perim = radio*3.14159265359

alert("El perimetro de tu circunferencia es: " + perim + "cm");

