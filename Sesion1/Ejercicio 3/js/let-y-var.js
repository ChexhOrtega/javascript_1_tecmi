// Prueba con var
var numero = 30;

console.log(numero); // Valor esperado 30
if (true) {
  var numero = 40;

  console.log(numero); // Valor esperado 40
}

console.log(numero); // ¿Cuál es el valor de la variable numero?

// Pruena con let
var texto = "Curso de JS";

console.log(texto); // Valor esperado "Curso de JS"

if (true) {
    let texto = "Curso de PHP";

    console.log(texto): // Valor "Curso de PHP"
}

console.log(texto); // ¿Cuál es el valor de texto?
