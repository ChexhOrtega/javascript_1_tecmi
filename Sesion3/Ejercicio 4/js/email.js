const validarEmail = function (email = "") {
  if (!email) {
    console.warn("No ingresaste un email");
    return;
  }

  if (typeof email !== "string") {
    console.error(`El valor de "${email}" ingresado NO es una cadena de texto`);
    return;
  }

  const esValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
  
  if(esValido) {
    console.log(`El email "${email}" es válido ✅`);
  } else {
    console.error(`El email "${email}" no es válido ❌`);
  }
};


validarEmail(); // No ingresaste un email
validarEmail(34); // El valor de "34" ingresado NO es una cadena de texto
validarEmail("example@domain"); // El email "example@domain" no es válido ❌
validarEmail("example@domain.com"); // El email "example@domain.com" es válido ✅