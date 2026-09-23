const _private = new WeakMap();

class Libro {
  constructor(titulo, autor, precio) {
    const propiedades = {
      _titulo: titulo,
      _autor: autor,
      _precio: precio,
    };

    _private.set(this, { propiedades });
  }

  get titulo() {
    return _private.get(this).propiedades["_titulo"];
  }

  set titulo(nuevoTitulo) {
    _private.get(this).propiedades["_titulo"] = nuevoTitulo;
  }

  get autor() {
    return _private.get(this).propiedades["_autor"];
  }

  set autor(nuevoAutor) {
    _private.get(this).propiedades["_autor"] = nuevoAutor;
  }

  get precio() {
    return _private.get(this).propiedades["_precio"];
  }

  obtenerTodosLosDatos() {
    console.log(`Título: ${this.titulo}, 
Autor: ${this.autor},
Precio: ${this.precio}`);
  }
}

class Comic extends Libro {
  constructor(titulo, autor, precio, ilustradores) {
    super(titulo, autor, precio);

    this.ilustradores = ilustradores;
  }

  agregarIlustradores(nuevosIlustradores) {
    this.ilustradores.push(...nuevosIlustradores);
  }

  obtenerTodosLosDatos() {
    super.obtenerTodosLosDatos();
    console.log(`Ilustradores: ${this.ilustradores}`);
  }
}

class CarritoCompras {
  constructor() {
    this.productos = [];
  }

  agregarProductos(cantidad, precio) {
    this.productos.push(...Array(cantidad).fill(precio));
  }

  mostrarProductos() {
    console.log(this.productos);
  }

  calcTotal() {
    return this.productos.reduce(
      (acumulador, precio) => acumulador + precio,
      0,
    );
  }

  imprimeTicket() {
    console.log(`Total a pagar ${this.calcTotal()}`);
  }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 300);

const comic1 = new Comic("Spider-Man", "Stan Lee", 150, ["Steve Ditko"]);

const carrito = new CarritoCompras();

carrito.agregarProductos(2, comic1.precio);
carrito.agregarProductos(3, libro1.precio);

carrito.mostrarProductos()

carrito.imprimeTicket();
libro1.obtenerTodosLosDatos();
comic1.obtenerTodosLosDatos();