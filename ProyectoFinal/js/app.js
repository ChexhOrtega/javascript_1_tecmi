const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();

  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
  console.log(formatoMoneda(totalIngresos()));
  console.log(formatoMoneda(totalEgresos()));
};

const totalIngresos = () => {
  let totalIngresos = 0;

  let ingresos = {
    Quincena: 9000,
    Venta: 400,
  };

  for (let [concepto, ingreso] of Object.entries(ingresos)) {
    totalIngresos += ingreso;
  }

  return totalIngresos;
};

const totalEgresos = () => {
  let totalEgresos = 0;

  let egresos = {
    Renta: 900,
    Ropa: 400,
  };

  for (let [concepto, egreso] of Object.entries(egresos)) {
    totalEgresos += egreso;
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

cargarCabecero();
