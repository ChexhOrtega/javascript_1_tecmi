// Pedir números al usuario
var numero1 = parseInt(prompt("Introduce el primer número:", 0));
var numero2 = parseInt(prompt("Introduce el segundo número:", 0));

// Validación: volver a pedir si no son válidos
while (
    isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0
) {
    alert("Por favor introduce solo números válidos y mayores que 0.");
    numero1 = parseInt(prompt("Introduce el primer número:", 0));
    numero2 = parseInt(prompt("Introduce el segundo número:", 0));
}

// Mostrar en consola los valores
console.log("Número 1: " + numero1);
console.log("Número 2: " + numero2);

// Comparaciones
if (numero1 === numero2) {
  alert("Los números son iguales.");
}
else if (numero1 > numero2) {
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES: " + numero2);
}
else if (numero2 > numero1) {
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
}
else {
    alert("INTRODUCE NÚMEROS CORRECTOS");
}
