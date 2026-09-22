var numero = parseInt(prompt("Introduce un número para obtener sus divisores:", 0));

if(isNaN(numero) || numero <= 0) {
  alert("Introduce solo números mayores que 0.");
  numero = parseInt(prompt("Introduce un número para obtener sus divisores:", 0));
}

document.write("<h1>Divisores de " + numero + ":</h1>");

for(var i = 1; i <= numero; i++) {
    if(numero % i === 0) {
        document.write("Divisor: " + i + "<br/>");
    }
}