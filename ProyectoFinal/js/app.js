const ingresos = [
  new Ingreso("Salario", 20000),
  new Ingreso("Venta auto", 50000),
];

const egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];

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

cargarCabecero();
