const ingresos = [
  new Ingreso("Salario", 20000),
  new Ingreso("Venta auto", 50000),
];

const egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];

const cargarCabecero = () => {
  let ingresosTotales = totalIngresos();
  let egresosTotales = totalEgresos();
  let presupuesto = ingresosTotales - egresosTotales;
  let porcentajeEgreso =
    ingresosTotales === 0 ? 0 : egresosTotales / ingresosTotales;

  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("ingresos").innerHTML =
    formatoMoneda(ingresosTotales);
  document.getElementById("egresos").innerHTML = formatoMoneda(egresosTotales);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
};

const totalIngresos = () => {
  let totalIngresos = 0;

  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }

  return totalIngresos;
};

const totalEgresos = () => {
  let totalEgresos = 0;

  for (let egreso of egresos) {
    totalEgresos += egreso.valor;
  }

  return totalEgresos;
};

const formatoMoneda = (moneda) => {
  return moneda.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (cantidad) => {
  return cantidad.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";

  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }

  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `    
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
          </button>
        </div>
      </div>
    </div>`;

  return ingresoHTML;
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);

  ingresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarIngresos();
};

const cargarEgresos = () => {
  let egresosHTML = "";

  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }

  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  let egresoHTML = `    
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
          </button>
        </div>
      </div>
    </div>`;

  return egresoHTML;
};

const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);

  egresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarEgresos();
};

const agregarDato = () => {
  let forma = document.getElementById("forma");
  let tipo = document.getElementById("tipo").value;
  let descripcion = document.getElementById("descripcion").value;
  let valor = document.getElementById("valor").value;

  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      let nuevoIngreso = new Ingreso(descripcion, parseFloat(valor));
      ingresos.push(nuevoIngreso);
    } else {
      let nuevoEgreso = new Egreso(descripcion, parseFloat(valor));
      egresos.push(nuevoEgreso);
    }

    cargarCabecero();
    cargarIngresos();
    cargarEgresos();

    forma.reset();
  }
};

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};
