//Precio base en quetzales
var precio_base = 3000;

//Valores de recargos
var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 =0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio total
var precio_final = 0;

//Preguntas base
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("Ingrese su edad en numeros");

var edad_numero = parseInt(edad, 10);

//Determinar si el asegurado tiene +18 años, de lo contrario no se puede generar la cotizacion

if (edad_numero <18) {
  alert("Lo sentimos, debe tener al menos 18 años para generar una cotizacion.");
} else {

//Determinar si el asegurado tiene conyuge actualmente
var casado = prompt("¿Esta casado?");

//Comprobamos la edad del conyuge
var edad_conyuge;
if (casado.toUpperCase() === "SI") {
  edad_conyuge = prompt("Que edad tiene su conyuge?");
 }
}
//Edades a numeros
var edad_numero = parseInt(edad, 10);
var edad_conyuge_numero = parseInt(edad_conyuge, 10);

//Edad del conyuge a numeros
if (casado.toUpperCase() === "SI") {
    edad_conyuge_numero = parseInt(edad_conyuge, 10);
}

var hijos = prompt("Cuantos hijos o hijas tiene?");

//Convertimos la edad de los hijos a numeros

var cantidad_hijos = parseInt(hijos, 10);

//Calculamos el recargo dependiendo de la edad del asegurado

if (edad_numero >= 18 && edad_numero < 25) {
  recargo = precio_base * edad_18;
  recargo_total += recargo;
} else if (edad_numero >= 25 && edad_numero < 50) {
  recargo = precio_base * edad_25;
  recargo_total += recargo;
} else if (edad_numero >= 50) {
  recargo = precio_base * edad_50;
  recargo_total += recargo;
}

//Calculamos el recargo dependiendo si el asegurado tiene conyuge y la edad del mismo
if (casado.toUpperCase() === "SI" && edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  recargo = precio_base * casado_18;
  recargo_total += recargo;
} else if (casado.toUpperCase() === "SI" && edad_conyuge_numero >=25 && edad_conyuge_numero < 50) {
  recargo = precio_base * casado_25;
  recargo_total += recargo;
} else if (casado.toUpperCase() === "SI" && edad_conyuge_numero >=50) {
    recargo = precio_base * casado_50;
    recargo_total += recargo;
}

//Calculamos el recargo basado en la cantidad de hijos que tenga el asegurado
    if (cantidad_hijos > 0) {
      recargo = precio_base * hijos_recargo * cantidad_hijos;
      recargo_total += recargo;
}

//Calculamos el precio final teniendo en cuenta el precio base mas todos los recargos
precio_final = precio_base + recargo_total;

//Mostramos el nombre del asegurado, el recargo total y el precio final de la cotizacion
alert("Para el asegurado " + nombre);
alert("El recargo total es de: " + recargo_total);
alert("El precio final es de: " + precio_final);