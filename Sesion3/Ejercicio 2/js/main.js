// Trabajando con funciones anómimas
const pelicula = function (nombre) {
  return "El nombre de la película es: " + nombre;
};

function sumameAnonima(a, b) {
  const suma = a + b;
  console.log(`La suma de ${a} + ${b} es: ${suma}`);
}

console.log("Pruebas con función anónima:");
console.log(pelicula("El Padrino"));
sumameAnonima(5, 10);

function sumameCallbacks(a, b, sumaYmuestra, sumaPorDos) {
  const suma = a + b;
  sumaYmuestra(suma);
  sumaPorDos(suma * 2);
  console.log(`La suma de ${a} + ${b} es: ${suma}`);
}

console.log("Pruebas con función anónima usando callbacks:");
sumameCallbacks(
  15,
  30,
  function (resultado) {
    console.log(`La suma es: ${resultado}`);
  },
  function (resultado) {
    console.log(`La suma por dos es: ${resultado}`);
  },
);

sumameCallbacks(
  15,
  30,
  resultado => console.log(`La suma es: ${resultado}`),
  resultado => console.log(`La suma por dos es: ${resultado}`),
);