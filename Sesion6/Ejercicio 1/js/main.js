const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

const descripcion = $("#descripcion");
const calorias = $("#calorias");
const carbohidratos = $("#carbohidratos");
const proteina = $("#proteina");

const lista = [];

const validarInput = function () {
  descripcion.val()
    ? descripcion.removeClass("is-valid")
    : descripcion.addClass("is-invalid");

  calorias.val()
    ? calorias.removeClass("is-valid")
    : calorias.addClass("is-invalid");

  carbohidratos.val()
    ? carbohidratos.removeClass("is-valid")
    : carbohidratos.addClass("is-invalid");

  proteina.val()
    ? proteina.removeClass("is-valid")
    : proteina.addClass("is-invalid");

  if (
    descripcion.val() &&
    calorias.val() &&
    carbohidratos.val() &&
    proteina.val()
  ) {
    agregar();
  }
};

descripcion.keypress(() => descripcion.removeClass("is-invalid"));
calorias.keypress(() => calorias.removeClass("is-invalid"));
carbohidratos.keypress(() => carbohidratos.removeClass("is-invalid"));
proteina.keypress(() => proteina.removeClass("is-invalid"));

const agregar = function () {
  const nuevoElemento = {
    descripcion: descripcion.val(),
    calorias: parseInt(calorias.val()),
    carbohidratos: parseInt(carbohidratos.val()),
    proteina: parseInt(proteina.val()),
  };

  lista.push(nuevoElemento);
  console.log(lista);

  limpiarInputs();

  actualizarTotales();
  renderElementos();
};

const limpiarInputs = function () {
  descripcion.val("");
  calorias.val("");
  carbohidratos.val("");
  proteina.val("");
};

const atrsToCadena = (tag, clases) => {
  const keys = Object.keys(clases);
  const atributos = [];

  for (let i = 0; i < keys.length; i++) {
    const atributo = `${keys[i]}="${clases[keys[i]]}"`;
    atributos.push(atributo);
  }

  const cadenaAtributos = atributos.join(" ");
  return `<${tag} ${cadenaAtributos}>`;
};

const atrsTag = (objeto, contenido) => {
  const { tag, attrs } = objeto;

  if (!attrs || Object.keys(attrs).length === 0) {
    return `<${tag}>${contenido}</${tag}>`;
  }
  const apertura = atrsToCadena(tag, attrs);

  return `${apertura}${contenido}</${tag}>`;
};

const tag = (t, contenido) => {
  if (typeof t === "string") {
    return atrsTag({ tag: t }, contenido);
  }

  return atrsTag(t, contenido);
};

const iconoBorrar = tag({ tag: "i", attrs: { class: "fas fa-trash-alt" } }, "");

const celdaTabla = (contenido) => tag("td", contenido);
const celdasTabla = (arreglo) => arreglo.map(celdaTabla).join("");
const filaTablaTag = (contenido) => tag("tr", contenido);
const filaTabla = (elementos) => compose(filaTablaTag, celdasTabla)(elementos);

const renderElementos = () => {
  $("#tbody").empty();

  lista.map((item, indice) => {
    const botonEliminar = tag(
      {
        tag: "button",
        attrs: {
          class: "btn btn-outline-danger",
          onclick: `eliminarElemento(${indice})`,
        },
      },
      iconoBorrar,
    );

    const fila = filaTabla([
      item.descripcion,
      item.calorias,
      item.carbohidratos,
      item.proteina,
      botonEliminar,
    ]);

    $("#tbody").append(fila);
  });
};

const actualizarTotales = () => {
  let caloriasTotal = 0;
  let carbohidratosTotal = 0;
  let proteinaTotal = 0;

  lista.map((item) => {
    caloriasTotal += item.calorias;
    carbohidratosTotal += item.carbohidratos;
    proteinaTotal += item.proteina;
  });

  $("#totalCalorias").text(caloriasTotal);
  $("#totalCarbohidratos").text(carbohidratosTotal);
  $("#totalProteina").text(proteinaTotal);
};
