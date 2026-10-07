// Autor: César Ortega
// class Egreso extends Dato {
  static contadorEgreso = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);

    _private.get(this)._id = ++Egreso.contadorEgreso;
  }

  get id() {
    return _private.get(this)._id;
  }
}
