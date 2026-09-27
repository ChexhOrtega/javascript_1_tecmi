const _private = new WeakMap();

class Dato {
  constructor(descripcion, valor) {
    _private.set(this, { _descripcion: descripcion, _valor: valor });
  }

  get descripcion() {
    return _private.get(this)._descripcion;
  }

  set descripcion(nuevaDescripcion) {
    _private.get(this)._descripcion = nuevaDescripcion;
  }

  get valor() {
    return _private.get(this)._valor;
  }

  set valor(nuevoValor) {
    _private.get(this)._valor = nuevoValor;
  }
}
