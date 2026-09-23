// 🎮 Objeto principal del juego
const juego = {
  opciones: ["🪨", "📄", "✂️"],
  nombreJugadores: {
    jugador1: "jugador1",
    jugador2: "Computadora",
  },
  scores: {
    puntosJ1: 0,
    puntosJ2: 0,
  },
};

// 🧑‍💻 Solicita el nombre del jugador mediante una ventana emergente
const pedirNuevoNombre = () => prompt("¿Cuál es tu nombre?");

// 📝 Función para validar y asignar el nombre del jugador
const cambiarNombre = function (nuevoNombre) {
  console.log("Tu nombre es: " + nuevoNombre);
  // Expresión regular: al menos una letra, puede incluir números
  const regexValido = /[A-Za-z]/;

  if (regexValido.test(nuevoNombre)) {
    // ✅ Nombre válido: contiene letras
    juego.nombreJugadores.jugador1 = nuevoNombre;
    console.log("Bienvenid@ " + nuevoNombre + " !");
  } else {
    // ❌ Nombre inválido: solo números o caracteres especiales
    console.log("Mejor te llamaré... " + juego.nombreJugadores.jugador1);
  }
};

// ✋ Devuelve piedra, papel o tijera según el número aleatorio
const imprimirManoAleatoria = function() {
  const numero = generarAleatorio(); // obtiene número como cadena
  
  return juego.opciones[numero]; // accede al ícono en el objeto
};

// 🎲 Genera un número aleatorio entre 0 y 2 y lo convierte en cadena
const generarAleatorio = function () {
  const aleatorio = Math.floor(Math.random() * 3); // 0, 1 o 2
  return aleatorio.toString(); // lo convierte en cadena
};

const imprimirResultado = function (puntosJ1, puntosJ2) {
  if (puntosJ2 > puntosJ1) {
    console.log(
      "Fin del juego gana " + juego.nombreJugadores.jugador2 + " - Game Over",
    );
  } else if (puntosJ1 > puntosJ2) {
    console.log(
      "Fin del juego gana " + juego.nombreJugadores.jugador1 + " - Felicidades",
    );
  } else {
    console.log(
      "Empate total entre " +
        juego.nombreJugadores.jugador1 +
        " y " +
        juego.nombreJugadores.jugador2 +
        " - Fin",
    );
  }
};

// ⚔️ Evalúa quién gana la partida
const evalua = function (eleccionJ1, eleccionJ2) {
  let gana = 0;

  // 🤝 Empate
  if (eleccionJ1 === eleccionJ2) {
    console.log(eleccionJ1 + " vs " + eleccionJ2 + " empatan");
  } else if (
    (eleccionJ1 === "✂️" && eleccionJ2 === "📄") ||
    (eleccionJ1 === "📄" && eleccionJ2 === "🪨") ||
    (eleccionJ1 === "🪨" && eleccionJ2 === "✂️")
  ) {
    // 🥇 Gana jugador 1
    console.log(eleccionJ1 + " gana a " + eleccionJ2);
    juego.scores.puntosJ1 += 1;
    gana = 1;
  } else {
    // 🥈 Gana jugador 2
    console.log(eleccionJ2 + " gana a " + eleccionJ1);
    juego.scores.puntosJ2 += 1;
    gana = 2;
  }

  // 🧾 Imprime el marcador actual
  resultado(gana);
};

const resultado = function (gana) {
  const j1 = juego.nombreJugadores.jugador1;
  const j2 = juego.nombreJugadores.jugador2;
  const pJ1 = juego.scores.puntosJ1;
  const pJ2 = juego.scores.puntosJ2;

  if (gana === 0) {
    console.log(`${j1} :[${pJ1}]   ${j2} :[${pJ2}]`);
  } else if (gana === 1) {
    console.log(`${j1} :[${pJ1}]   ${j2} :[${pJ2}]`);
  } else {
    console.log(`${j1} :[${pJ1}]   ${j2} :[${pJ2}]`);
  }
};

const main = function () {
    while (juego.scores.puntosJ1 < 3 && juego.scores.puntosJ2 < 3) {
        // Generar manos aleatorias
        const jugador1Hand = imprimirManoAleatoria();
        const jugador2Hand = imprimirManoAleatoria();

        // Mostrar elecciones
        console.log(juego.nombreJugadores.jugador1 + " elige: " + jugador1Hand);
        console.log(juego.nombreJugadores.jugador2 + " elige: " + jugador2Hand);

        evalua(jugador1Hand, jugador2Hand);

        if(juego.scores.puntosJ1 === 3 || juego.scores.puntosJ2 === 3) {
            imprimirResultado(juego.scores.puntosJ1, juego.scores.puntosJ2);
            break; // Salir del bucle
        }
    }
}

// Iniciar el juego
cambiarNombre(pedirNuevoNombre()); // Solicita y asigna el nombre del jugador

console.log("Que comience el juego");

main();