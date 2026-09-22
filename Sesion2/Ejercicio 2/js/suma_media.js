var suma = 0;
var contador = 0;
var numero = 0;

while (true) {
  numero = parseInt(prompt("Introduce números hasta que uno sea negativo:", 0));

  if (isNaN(numero)) {
    numero = 0;
  }

  if (numero < 0) {
    break;
  }

  suma += numero;
  contador++;

  console.log("Número introducido", numero);
  console.log("Suma actual", suma, "Contador", contador);
}

alert(
  "La suma de todos los números es: " +
    suma +
    "\nLa media de todos los números es: " +
    (suma / contador)
);
