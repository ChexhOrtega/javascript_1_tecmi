// Autor: César Ortega
class Ingreso extends Dato {
  static contadorIngreso = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);

    _private.get(this)._id = ++Ingreso.contadorIngreso;
  }

  get id() {
    return _private.get(this)._id;
  }
}
