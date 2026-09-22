// Trabajando con funciones
// console.log("Pruebas con función:");
// contarCaracteres("");
// contarCaracteres("Hello World");
// contarCaracteres("Hola bienvenido a la sesión 3 de JavaScript");

// Trabajando con funciones flecha
const contarCaracteresArrow = (cadena = "") => {
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
};

console.log("Pruebas con función flecha:");
contarCaracteresArrow("");
contarCaracteresArrow("César");
contarCaracteresArrow("Hola bienvenido a la sesión 3 de JavaScript");
