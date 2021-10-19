//  1. Suma

var num = parseInt(prompt("Primero numero para suma"));
var num1 = parseInt(prompt("Segundo numero para suma"));

var suma = num + num1;

alert(suma);

//  2. Adicion y multiplicación

var mult = num * num1;

alert("El resultado de tu suma es " + suma + ", y el resultado de tu multiplicación es " + mult);

// 3. Promedio

var num = parseInt(prompt("Promedio con los siguientes numeros"));
var num1 = parseInt(prompt("Promedio con los siguientes numeros"));
var num2 = parseInt(prompt("Promedio con los siguientes numeros"));
var num3 = parseInt(prompt("Promedio con los siguientes numeros"));
var num4 = parseInt(prompt("Promedio con el siguientes numeros"));

var promedio = (num + num1 + num2 + num3 + num4) / 5;

alert("El promedio es tus numero es " + promedio);

// 4. Perímetro

var num = parseInt(prompt("Introduzca el lado del rectangulo para saber su perímetro"));
var num1 = parseInt(prompt("Introduzca el lado del rectangulo para saber su perímetro"));

var perimetro = (num*2) + (num1*2);

alert("El perímetro es de " + perimetro + "cm.");

// 5. Área

var area = num * num1;

alert("Y su area es de " + area + "cm2");



// 6. Datos completos

var nombre = prompt("Como te llamas?").toLocaleLowerCase();
var apellido = prompt("Y tu apellido?").toUpperCase();
var edad = prompt("Que edad tienes?"); 

alert("Tu nombre: " + nombre + "\n" +
      "Tu apellido: " + apellido + "\n" +  
      "Edad: " + edad + "años");