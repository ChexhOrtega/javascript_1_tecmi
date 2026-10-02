// 1. Importar la función desde su ruta
import countDown from "./cuenta_regresiva.js";
import hamburgerMenu from "./hamburger.js";
import { alarm, digitalClock } from "./reloj.js";
import { moveBall, shorcuts } from "./teclado.js";

// 2. Crear una constante para document
const d = document;

// 3. Escuchar la carga del documento
d.addEventListener("DOMContentLoaded", () => {
  // Ejecutar la función hamburgerMenu con los selectores correspondientes
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  
  // ACtivar reloj digital
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  
  // Activar alarma
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

  // Iniciar cuenta regresiva
  countDown("countdown", "Oct 1, 2026 21:23:00", "Feliz Cumpleaños!!!")
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});
