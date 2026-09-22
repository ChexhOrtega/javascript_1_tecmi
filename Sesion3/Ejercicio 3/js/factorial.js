// --------------------- Funciones expresadas con parámetros ---------------------
const factorial = function (numero) {
  // Validación 1: undefined
  if (numero === undefined) {
    console.warn("No ingresaste un número");
    return;
  }

  // Validación 2: no es número
  if (typeof numero !== "number") {
    console.error(`El valor de "${numero}" ingresado NO es un número`);
    return;
  }

  // Validación 3: número cero
  if (numero === 0) {
    console.error("El numero no puede ser 0");
    return;
  }

  // Validación 4: número negativo
  if (Math.sign(numero) === -1) {
    console.error("El número no puede ser negativo");
    return;
  }

  let resultadoFactorial = 1;

  for (let i = numero; i > 1; i--) {
    resultadoFactorial *= i;
  }

  console.log(`El factorial del número ${numero} es: ${resultadoFactorial}`);
};

factorial(5); // El factorial del número 5 es: 120
factorial(0); // El numero no puede ser 0
factorial(-3); // El número no puede ser negativo
factorial("5"); // El valor de "5" ingresado NO es un número
factorial(); // No ingresaste un número