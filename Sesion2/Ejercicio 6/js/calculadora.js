// Pedir números al usuario
var numero1 = parseFloat(prompt("Introduce el primer número:", 0));
var numero2 = parseFloat(prompt("Introduce el segundo número:", 0));

// Validación: volver a pedir si no son válidos
while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
  alert("Por favor introduce solo números válidos y mayores o iguales que 0.");
  numero1 = parseFloat(prompt("Introduce el primer número:", 0));
  numero2 = parseFloat(prompt("Introduce el segundo número:", 0));
}

var resultado =
  "La suma es: " +
  (numero1 + numero2) +
  "<br>" +
  "La resta es: " +
  (numero1 - numero2) +
  "<br>" +
  "La multiplicación es: " +
  numero1 * numero2 +
  "<br>" +
  "La división es: " +
  numero1 / numero2 +
  "<br>";

var resultadoCMD = "La suma es: " +
  (numero1 + numero2) +
  "\n" +
  "La resta es: " +
  (numero1 - numero2) +
  "\n" +
  "La multiplicación es: " +
  numero1 * numero2 +
  "\n" +
  "La división es: " +
  numero1 / numero2 +
  "\n";

document.write("Los números introducidos son: <br>" + "Número 1: "+ numero1 + "<br>" + "Número 2: " + numero2 + "<br><br>" + resultado);
alert("Los números introducidos son: \n" + "Número 1: "+ numero1 + "\n" + "Número 2: " + numero2 + "\n\n" + resultadoCMD);
console.log("Los números introducidos son: \n" + "Número 1: "+ numero1 + "\n" + "Número 2: " + numero2 + "\n\n" + resultadoCMD);